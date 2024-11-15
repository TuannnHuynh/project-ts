import { useRef } from "react";
import useFetch from "../../hooks/fetch/useFetch";

type TData = {
  title: string;
  id: number;
};

type ProductsResponse = {
  products: TData[];
};

const ScrollTopAndBottom = () => {
  const { data, error, pending } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="text-center">
      <h2 className="my-4 text-4xl font-semibold">Scroll Top And Bottom</h2>
      <button
        onClick={handleScrollToBottom}
        className="my-3 rounded bg-[#333] px-4 py-2 text-[#fff]"
      >
        Scroll to bottom
      </button>
      <div
        className="max-h-96 overflow-auto border"
        style={{ maxHeight: "300px", border: "1px solid #ccc" }}
        ref={containerRef}
      >
        {pending ? <h3>Pending! Please wait</h3> : null}
        {error ? <h3>{error}</h3> : null}
        <ul>
          {data && data.products.length > 0
            ? data.products.map((val) => <li key={val.id}>{val.title}</li>)
            : null}
        </ul>
      </div>
      <button
        onClick={handleScrollToTop}
        className="my-3 rounded bg-[#333] px-4 py-2 text-[#fff]"
      >
        Scroll to top
      </button>
    </div>
  );
};

export default ScrollTopAndBottom;

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type Data = {
  id: number;
  title: string;
  thumbnail: string;
};

const LoadMore = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [products, setProducts] = useState<Data[] | null>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data: Data[] = res.data.products;
      if (data && data.length) {
        setProducts((prevData: Data[] | null) => [
          ...(prevData || []),
          ...data,
        ]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg((e as Error).message);
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct, count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }
  return (
    <div className="load-more">
      <h2 className="my-10 text-center text-4xl font-bold">Load More</h2>
      <div className="products flex flex-wrap justify-center gap-4">
        {products && products.length
          ? products.map((val) => {
              return (
                <div
                  key={`product-${val.id}`}
                  className="rounded-md border-[2px] border-solid border-[#333] p-2"
                >
                  <img
                    className="w-[320px]"
                    src={val.thumbnail}
                    alt={val.title}
                  />
                  <p className="text-center font-bold">{val.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="my-5 flex justify-center">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className={`${disableButton ? "cursor-not-allowed" : "cursor-pointer"} btn-load-more rounded-md bg-slate-600 px-10 py-3 text-[#fff]`}
        >
          Load more products
        </button>
      </div>
      {disableButton ? (
        <p className="text-center text-xl font-bold">
          You have reached to 100 products
        </p>
      ) : null}
    </div>
  );
};

export default LoadMore;

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type ScrollIndicatorProps = {
  url: string; // Type the url prop
};

type TProducts = {
  title: string;
};

const ScrollIndicator = ({ url }: ScrollIndicatorProps) => {
  const [products, setProducts] = useState<TProducts[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios(url);
      const data = res.data;
      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
      } else {
        setErrorMessage("No products found.");
      }
      setLoading(false);
    } catch (e) {
      setErrorMessage((e as Error).message);
      setLoading(false);
    }
  }, [url]);
  const handleScrollPercentage = () => {
    const howMuchScrolled: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMessage !== null) {
    return <div>Error occured ! {errorMessage}</div>;
  }

  return (
    <div className="mt-[72px]">
      <div className="top-container fixed top-0 z-10 w-full bg-[#075b0a] py-3 text-[#fff]">
        <h2 className="text-center text-2xl">Custom Scroll Indicator</h2>
        <div className="scroll-progress-tracking-container h-[12px] pt-4">
          <div
            className="current-progress-bar h-[12px] bg-[#8b02b5]"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container mt-5">
        <h3 className="text-center text-3xl font-semibold">
          List Product Test Scroll Indicator
        </h3>
        {products && products.length > 0
          ? products.map((val, idx) => (
              <p key={idx} className="mt-2 text-center">
                {val.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

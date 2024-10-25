import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

type Api = {
  url: string;
  limit: number;
  page: number;
};

type Data = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const ImageSlider = ({ url, limit = 5, page = 1 }: Api) => {
  const [images, setImages] = useState<Data[] | null>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = useCallback(
    async (getUrl: string) => {
      try {
        setLoading(true);
        const res = await axios(`${getUrl}?page=${page}&limit=${limit}`);
        const data: Data[] = res.data;
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (e) {
        setErrorMsg((e as Error).message);
        setLoading(false);
      }
    },
    [page, limit], // Dependencies
  );
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, fetchImages]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }
  const handlePrevious = (): void => {
    if (images && images.length) {
      setCurrentSlide(
        currentSlide === 0 ? images.length - 1 : currentSlide - 1,
      );
    }
  };
  const handleNext = (): void => {
    if (images && images.length) {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1,
      );
    }
  };
  return (
    <>
      <h2 className="mb-10 text-center text-4xl font-bold">Images Slider</h2>
      <div className="flex w-full justify-center px-2 md:px-0">
        <div className="images-slider relative flex h-[450px] w-[600px] items-center justify-center">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left absolute left-4 h-8 w-8 cursor-pointer text-[#fff]"
          />
          {images && images.length > 0
            ? images.map((item, idx) => {
                return (
                  <img
                    className={`${currentSlide === idx ? "current-image" : "current-image hidden"} h-full w-full rounded-sm shadow-[0px_0px_7px_#666]`}
                    key={item.id}
                    alt={item.download_url}
                    src={item.download_url}
                  />
                );
              })
            : null}
          <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right absolute right-4 h-8 w-8 cursor-pointer text-[#fff]"
          />
          <span className="circle-indicator absolute bottom-4 flex">
            {images && images.length
              ? images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`${currentSlide === idx ? "current-indicator" : "current-indicator bg-[gray]"} mx-1 h-4 w-4 rounded-[50%] bg-[#ffffff]`}
                  ></button>
                ))
              : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

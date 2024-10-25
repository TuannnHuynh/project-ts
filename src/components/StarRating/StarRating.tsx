import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (getCurrentIndex: number): void => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex: number): void => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (): void => {
    setHover(rating);
  };
  return (
    <>
      <h2 className="my-10 text-center text-4xl font-bold">Star Rating</h2>
      <div className="start-rating mb-16 flex justify-center px-4 md:px-0">
        {[...Array(noOfStars)].map((_, idx) => {
          idx += 1;
          return (
            <FaStar
              key={`star-${idx}`}
              className={`${idx <= (hover || rating) ? "active" : "inactive"} cursor-pointer`}
              onClick={() => handleClick(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave()}
              size={35}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;

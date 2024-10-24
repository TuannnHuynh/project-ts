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
    <div className="start-rating flex h-screen justify-center">
      {[...Array(noOfStars)].map((_, idx) => {
        idx += 1;
        return (
          <FaStar
            key={`star-${idx}`}
            className={`${idx <= (hover || rating) ? "active" : "inactive"} cursor-pointer`}
            onClick={() => handleClick(idx)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

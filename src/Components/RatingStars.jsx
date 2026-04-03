import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const rounded = Math.round(rating * 2) / 2; // round to .5
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;

        if (rounded >= starValue) {
          return <FaStar key={i} />;
        } else if (rounded >= starValue - 0.5) {
          return <FaStarHalfAlt key={i} />;
        } else {
          return <FaRegStar key={i} />;
        }
      })}

      <span className="text-black font mt-1 dark:text-white ">
        {rating}
      </span>
    </div>
  );
};

export default RatingStars;

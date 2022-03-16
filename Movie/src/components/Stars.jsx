import React from "react";
const StarRating = ({ rate }) => {
  return (
    <div className="star-rating">
      {[...Array(Math.round(rate / 2))].map((star, index) => {
        return (
          <span key={index} className="star">
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
export default StarRating;

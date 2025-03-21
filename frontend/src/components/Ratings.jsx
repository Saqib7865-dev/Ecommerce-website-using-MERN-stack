import React from "react";

const Ratings = ({ rating }) => {
  const stars = [];
  for (let i = 1; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`ri-star${i >= rating ? "-line" : "-fill"}`}
      ></span>
    );
  }
  return <div className="product__rating">{stars}</div>;
};

export default Ratings;

import React, { useState } from "react";
import "./style.css";
import Star from "../Star/Star";

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  defaultRating = 0,
  onSetRating
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating)
  };

  return (
    <div className="starRatingWrapper">
      <div className="starRating">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p className="textContent">{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;

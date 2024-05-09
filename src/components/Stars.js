import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Stars = ({ rating }) => {
  const starElements = [];

  // Create an array of stars based on the rating value
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starElements.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    } else {
      starElements.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />
      );
    }
  }

  return (
    <div className="flex">
      {starElements}
    </div>
  );
};
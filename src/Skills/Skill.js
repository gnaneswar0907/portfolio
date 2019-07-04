import React from "react";

import "./Skill.css";

export const Skill = ({ image, children, index }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={image} alt="skill" className="FrontImage" />
        </div>
        <div
          className={index % 2 !== 0 ? "flip-box-backEven" : "flip-box-backOdd"}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

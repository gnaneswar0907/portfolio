import React from "react";

import "./Project.css";

export const Project = ({ image, title, backtext, index, chips }) => {
  const renderPoints = () => {
    return backtext.map((point, index) => {
      return (
        <li key={index}>
          <p>{point}</p>
        </li>
      );
    });
  };

  const renderChips = () => {
    return chips.map((chip, index) => {
      return (
        <div key={index} className="Chip">
          {chip}
        </div>
      );
    });
  };

  return (
    <div style={{ padding: "6%" }}>
      <div className="Project">
        <div className={index % 2 === 0 ? "LeftFrontCard" : "RightFrontCard"}>
          <img alt="Project" src={image} />
          <div className="Content">
            <h3 className="Header">{title}</h3>
          </div>
        </div>
        <div className={index % 2 === 0 ? "BlueBackCard" : "RedBackCard"}>
          <div className="Heading">
            <p>{title}</p>
          </div>
          <div className="Content">
            <ul>{renderPoints()}</ul>
            <hr />
          </div>
          <div className="Chips">{renderChips()}</div>
        </div>
      </div>
    </div>
  );
};

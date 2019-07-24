import React from "react";

import "./Project.css";

import { Image, Reveal, Label } from "semantic-ui-react";

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
      return <Label key={index}>{chip}</Label>;
    });
  };

  return (
    <div className="Project">
      <Reveal animated={`move${index % 2 === 0 ? "" : " right"}`}>
        <Reveal.Content className="FrontCard" visible>
          <Image src={image} className="Image" />
          <div className="Content">
            <h3 className="Header">{title}</h3>
            {/* <p className="SubContent">({subtext})</p> */}
          </div>
        </Reveal.Content>
        <Reveal.Content
          className={index % 2 === 0 ? "BackCardBlue" : "BackCardRed"}
          hidden
        >
          <div className="Heading">
            <p>{title}</p>
          </div>
          <div className="Content">
            <ul style={{ paddingInlineStart: "10px" }}>{renderPoints()}</ul>
            <hr />
            <Label.Group className="Chips" circular>
              {renderChips()}
            </Label.Group>
          </div>
        </Reveal.Content>
      </Reveal>
    </div>
  );
};

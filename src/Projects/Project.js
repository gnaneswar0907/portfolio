import React from "react";

import "./Project.css";

import pin from "./images/pin.png";

import { Image, Reveal } from "semantic-ui-react";

export const Project = ({ image, title, subtext, backtext, index }) => {
  return (
    <div className="Project">
      <Reveal animated={`move${index % 2 === 0 ? "" : " right"}`}>
        <Reveal.Content className="FrontCard" visible>
          <Image src={image} className="Image" />
          <div className="Content">
            <h3 className="Header">{title}</h3>
            <p className="SubContent">({subtext})</p>
          </div>
        </Reveal.Content>
        <Reveal.Content
          className={index % 2 === 0 ? "BackCardBlue" : "BackCardRed"}
          hidden
        >
          <Image spaced src={pin} size="tiny" />
          <p className="Content">{backtext}</p>
        </Reveal.Content>
      </Reveal>
    </div>
  );
};

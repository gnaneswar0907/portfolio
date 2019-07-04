import React from "react";
import { Project } from "./Project";

import social from "./images/social_media.jpg";
import library from "./images/library.jpg";
import checkin from "./images/ml.jpg";
import streams from "./images/livestream.jpg";

const projects = [
  {
    image: social,
    title: "Social Network Application",
    subtext: "ReactJS and NodeJS",
    backtext: `Implemented a social network application with many features similar
    to those currently supported by websites like Facebook and
    Instagram. The Front End Development was implemented using ReactJS
    and the Backend was implemented using Node, Express and MongoDB`
  },
  {
    image: checkin,
    title: "Facebook CheckIn Prediction",
    subtext: "Machine Learning",
    backtext: ``
  },
  {
    image: library,
    title: "Library Management Application",
    subtext: "Spring Boot, Thymeleaf and MySQL",
    backtext: `Implemented a full stack libray management application using Spring Framework.
    Some of the features include issuing books to students, calculating and displaying the fines,
    searching for required book from a catalog based on author or book ISBN and few more.`
  },
  {
    image: streams,
    title: "Video Streaming Application",
    subtext: "ReactJS",
    backtext: `Implemented a live video streaming application similar to twitch live streaming website with basic CRUD features using ReactJS.`
  }
];

export const Projects = () => {
  return (
    <div className="Projects">
      {projects.map(({ image, title, subtext, backtext }, index) => {
        return (
          <Project
            key={index}
            index={index}
            image={image}
            title={title}
            subtext={subtext}
            backtext={backtext}
          />
        );
      })}
    </div>
  );
};

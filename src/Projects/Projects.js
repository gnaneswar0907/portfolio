import React from "react";
import { Project } from "./Project";

import social from "./images/social_media.jpg";
import library from "./images/library.jpg";
import checkin from "./images/ml.jpg";
import streams from "./images/livestream.jpg";
import search from "./images/search.png";
import editor from "./images/editor.png";

import "./Projects.css";

const projects = [
  {
    image: social,
    title: "Social Network Application",
    chips: ["JavaScript", "ReactJS", "ExpressJS", "MongoDB", "Github"],
    backtext: [
      `Implemented a full stack social network application with many features similar
    to those currently supported by websites like Facebook and
    Instagram.`,
      `Developed RESTful APIs for server-side using ExpressJS.`
    ]
  },
  {
    image: checkin,
    title: "Facebook CheckIn Prediction",
    chips: ["Classification", "XGBoost", "Random Forest", "KNN"],
    backtext: [
      `Implemented a Ensemble of three classifiers to predict which place a person would check in depending on the given data.`,
      `Three powerful classifiers were used as a part of the project.`
    ]
  },
  {
    image: library,
    title: "Library Management Application",
    chips: ["Java", "Spring Boot", "Spring MVC", "Thymeleaf", "MySQL"],
    backtext: [
      `Implemented a full stack libray management application using Spring Framework.`,
      `Some of the features include issuing books to students, displaying the fines,
    searching for required book from a catalog.`
    ]
  },
  {
    image: streams,
    title: "Video Streaming Application",
    chips: ["JavaScript", "ReactJS", "NodeJS", "ES6", "Github"],
    backtext: [
      `Implemented a live video streaming application similar to twitch live streaming website.`,
      `The basic CRUD features were implemented using ReactJS.`
    ]
  },
  {
    image: search,
    title: "Multi Dimensional Search",
    chips: ["JAVA", "RBT", "HashMap"],
    backtext: [
      `Implementation of MDS for a website seller (like Amazon), 
    having thousands of Products (each with its own ID, Price, Description). `,
      `Organizing data into a TreeMap (Red-Black Tree), used HashMap, and HashSet to achieve insertion, 
    deletion, search, modification efficiently.`
    ]
  },
  {
    image: editor,
    title: "Rich Text Editor",
    chips: ["ReactJS", "slatejs"],
    backtext: [
      `Developed a React based rich text editor(RTE) making use of slatejs package which supports various operations`
    ]
  }
];

export const Projects = () => {
  return (
    <div className="SeperateProjects">
      {projects.map(({ image, title, chips, backtext }, index) => {
        return (
          <Project
            key={index}
            index={index}
            image={image}
            title={title}
            chips={chips}
            backtext={backtext}
          />
        );
      })}
    </div>
  );
};

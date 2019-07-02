import React from "react";
import { Skill } from "./Skill";

import "./Skills.css";
import java from "./images/java.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import nodejs from "./images/nodejs.png";
import aws from "./images/aws.png";
import spring from "./images/spring.png";
import crm from "./images/crm.png";
import mongo from "./images/mongo.png";
import sql from "./images/sql.svg";

const languages = [
  {
    image: java,
    description: "Experienced",
    extras: ["MultiThreading", "Executor Framework"]
  },
  {
    image: javascript,
    description: "Experienced",
    extras: ["ES6", "Jquery"]
  },
  {
    image: react,
    description: "Experienced",
    extras: ["Redux", "React Native"]
  },
  {
    image: nodejs,
    description: "Intermediate",
    extras: ["REST API", "Socket IO"]
  }
];

const frameworks = [
  {
    image: spring,
    description: "Experienced",
    extras: ["Spring MVC", "Spring REST", "Spring BOOT"]
  },
  {
    image: aws,
    description: "Intermediate",
    extras: ["Certified Developer Associate", "Lambda, API Gateway"]
  },
  {
    image: crm,
    description: "Intermediate",
    extras: ["Certified Developer"]
  }
];

const database = [
  {
    image: sql,
    description: "Experienced"
  },
  {
    image: mongo,
    description: "Intermediate"
  }
];

export const Skills = ({ wide }) => {
  return (
    <>
      {wide === "4" ? (
        <div className="Skills">
          {languages.map(({ image, description, extras }, index) => (
            <Skill key={index} index={index} image={image}>
              <h2 style={{ marginTop: "25%" }}>{description}</h2>
              {extras
                ? extras.map((extra, index) => <p key={index}>{extra}</p>)
                : ""}
            </Skill>
          ))}
        </div>
      ) : wide === "3" ? (
        <div className="Skills">
          {frameworks.map(({ image, description, extras }, index) => (
            <Skill key={index} index={index} image={image}>
              <h2 style={{ marginTop: "25%" }}>{description}</h2>
              {extras
                ? extras.map((extra, index) => <p key={index}>{extra}</p>)
                : ""}
            </Skill>
          ))}
        </div>
      ) : wide === "2" ? (
        <div className="Skills">
          {database.map(({ image, description, extras }, index) => (
            <Skill key={index} index={index} image={image}>
              <h2 style={{ marginTop: "25%" }}>{description}</h2>
              {extras
                ? extras.map((extra, index) => <p key={index}>{extra}</p>)
                : ""}
            </Skill>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

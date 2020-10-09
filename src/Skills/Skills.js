import React from "react"
import { Skill } from "./Skill"

import "./Skills.css"
import java from "./images/java.png"
import javascript from "./images/javascript.png"
import react from "./images/react.png"
import nodejs from "./images/nodejs.png"
import aws from "./images/aws.png"
import spring from "./images/spring.png"
import crm from "./images/crm.png"
import mongo from "./images/mongo.png"
import sql from "./images/sql.svg"
import net from "./images/net.png"
import webpack from "./images/webpack.png"
import ts from "./images/typescript.png"
import babel from "./images/babel.png"

const languages = [
  {
    image: javascript,
    description: "Experienced",
    extras: ["ES6", "Jquery"],
  },
  {
    image: react,
    description: "Experienced",
    extras: ["Redux", "React Native"],
  },
  {
    image: webpack,
    description: "Experienced",
  },
  {
    image: babel,
    description: "Intermediate",
  },
  {
    image: ts,
    description: "Intermediate",
  },
  {
    image: java,
    description: "Experienced",
    extras: ["MultiThreading", "Executor Framework"],
  },
  {
    image: nodejs,
    description: "Intermediate",
    extras: ["REST API", "Socket IO"],
  },
]

const frameworks = [
  {
    image: spring,
    description: "Experienced",
    extras: ["Spring MVC", "Spring REST", "Spring BOOT"],
  },
  {
    image: aws,
    description: "Intermediate",
    extras: ["Certified Developer Associate", "Lambda, API Gateway"],
  },
  {
    image: crm,
    description: "Intermediate",
    extras: ["Certified Developer"],
  },
  {
    image: net,
    description: "Experienced",
    extras: ["C#", "ASP.NET", "LINQ"],
  },
]

const database = [
  {
    image: sql,
    description: "Experienced",
  },
  {
    image: mongo,
    description: "Intermediate",
  },
]

export const Languages = () => {
  return (
    <div className="SeperateSkills">
      {languages.map(({ image, description, extras }, index) => (
        <Skill key={index} index={index} image={image}>
          <h2 style={{ marginTop: "25%" }}>{description}</h2>
          {extras
            ? extras.map((extra, index) => <p key={index}>{extra}</p>)
            : ""}
        </Skill>
      ))}
    </div>
  )
}

export const Frameworks = () => {
  return (
    <div className="SeperateSkills">
      {frameworks.map(({ image, description, extras }, index) => (
        <Skill key={index} index={index} image={image}>
          <h2 style={{ marginTop: "25%" }}>{description}</h2>
          {extras
            ? extras.map((extra, index) => <p key={index}>{extra}</p>)
            : ""}
        </Skill>
      ))}
    </div>
  )
}

export const Database = () => {
  return (
    <div className="SeperateSkills">
      {database.map(({ image, description, extras }, index) => (
        <Skill key={index} index={index} image={image}>
          <h2 style={{ marginTop: "40%" }}>{description}</h2>
          {extras
            ? extras.map((extra, index) => <p key={index}>{extra}</p>)
            : ""}
        </Skill>
      ))}
    </div>
  )
}

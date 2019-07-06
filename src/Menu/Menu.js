import React from "react";

import { Link } from "react-router-dom";

import { List } from "semantic-ui-react";

import Fade from "react-reveal/Fade";

import "./Menu.css";
import { IconList } from "../Footer";

export const Menu = ({ className, currentActive }) => {
  return (
    <div className={className}>
      <List className="MenuList" animated verticalAlign="middle">
        <List.Item
          as={Link}
          to="/"
          className={currentActive === "home" ? "MenuItem Active" : "MenuItem"}
        >
          Home
        </List.Item>
        <List.Item
          as={Link}
          to="/about"
          className={currentActive === "about" ? "MenuItem Active" : "MenuItem"}
        >
          About
        </List.Item>
        <List.Item
          as="a"
          href="https://gnaneswarportfolio.s3.amazonaws.com/Gnaneswar_Resume.pdf"
          target="_blank"
          className={
            currentActive === "resume" ? "MenuItem Active" : "MenuItem"
          }
        >
          Resume
        </List.Item>
        <List.Item
          as={Link}
          to="/contact"
          className={
            currentActive === "contact" ? "MenuItem Active" : "MenuItem"
          }
        >
          Contact
        </List.Item>
      </List>
      <div className="BottomLinks">
        <Fade delay={1000}>
          <IconList />
        </Fade>
      </div>
    </div>
  );
};

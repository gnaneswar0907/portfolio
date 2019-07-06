import React, { useState } from "react";

import { Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";

import Zoom from "react-reveal";

import "./Contact.css";

import Menu from "../Menu";
import { ContactForm } from "./ContactForm";
import { Location } from "./Location";

export const Contact = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    const newMenuClass = menuClass === "Menu" ? "MenuReverse" : "Menu";
    if (menuActive) {
      setMenuClass(newMenuClass);
      setTimeout(() => setMenuActive(!menuActive), 1000);
    } else {
      setMenuClass(newMenuClass);
      setMenuActive(!menuActive);
    }
  };

  return (
    <Zoom delay={500}>
      <div className="Contact">
        <div className="ContactNav">
          <Link to="/">
            <h2 className="Header">Gnaneswar Gandu</h2>
          </Link>
          <span className="MenuIcon">
            <Icon
              onClick={toggleMenu}
              link
              name={menuActive ? "cancel" : "sidebar"}
              size="big"
            />
          </span>
          {menuActive && <Menu className={menuClass} currentActive="contact" />}
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Location />
          <ContactForm />
          {/* <Footer /> */}
        </div>
      </div>
    </Zoom>
  );
};

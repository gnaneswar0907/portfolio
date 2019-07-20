import React, { useState } from "react";

import { Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";

import Zoom from "react-reveal";

import "./Contact.css";

import Menu from "../Menu";
import { ContactForm } from "./ContactForm";
import { Location } from "./Location";
import Footer from "../Footer";

export const Contact = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [locClass, setLocClass] = useState("Location");
  const [footerClass, setFooterClass] = useState("ContactFooter");

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

  const shiftLoacation = where => {
    if (where === "up") {
      setLocClass("LocationUp");
      setFooterClass("HideFooter");
    } else {
      setLocClass("Location");
      setFooterClass("ContactFooter");
    }
  };

  return (
    <Zoom>
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
        <div className={locClass}>
          <Location />
        </div>

        <div className="Form">
          <ContactForm shiftLoacation={shiftLoacation} />
        </div>
        {/* <ContactForm /> */}

        <div className={footerClass}>
          <Footer />
        </div>
      </div>
    </Zoom>
  );
};

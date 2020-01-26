import React from "react";

import { Link } from "react-router-dom";

import about from "./about.jpeg";
import { Icon, Button } from "semantic-ui-react";

import Zoom from "react-reveal/Zoom";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import "./About.css";
import Menu from "../Menu";
import WorkAndEducation from "../WorkAndEducation";
import { Languages, Frameworks, Database } from "../Skills";
import Projects from "../Projects";
import Footer from "../Footer";

export class About extends React.Component {
  state = { menuActive: false, menuClass: "", backToTop: false };

  componentDidMount() {
    clearAllBodyScrollLocks(this.bodyRef);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleMenu = () => {
    const { menuActive, menuClass } = this.state;
    const newMenuClass = menuClass === "Menu" ? "MenuReverse" : "Menu";
    if (menuActive) {
      enableBodyScroll(this.bodyRef);
      this.setState({ menuClass: newMenuClass }, () => {
        setTimeout(() => this.setState({ menuActive: !menuActive }), 1000);
      });
    } else {
      disableBodyScroll(this.bodyRef);
      this.setState({ menuActive: !menuActive, menuClass: newMenuClass });
    }
  };

  closeMenu = () => this.setState({ menuActive: false });

  handleScroll = e => {
    const scrollTop = e.currentTarget.scrollY;
    scrollTop > 600
      ? this.setState({ backToTop: true })
      : this.setState({ backToTop: false });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { menuActive, menuClass, backToTop } = this.state;
    return (
      <Zoom ssrFadeout>
        <div
          onScroll={this.handleScroll}
          ref={node => (this.bodyRef = node)}
          style={{ position: "relative", height: "100%" }}
        >
          <div className="AboutRow">
            <img alt="MyImage" width="100%" src={about} />
            <div className="AboutContent">
              <h1 className="Heading">Gnaneswar Gandu</h1>
              <p className="Content">
                I am a Graduate Student pursuing my Master's degree in Computer
                Science Major at <b>The University of Texas at Dallas</b>. I
                specialize in building full stack applications specific to the
                business needs of the clients. I have done work in software
                development, front-end/back-end web development and
                database/server management. I am also little bit into cloud
                technology specifically Amazon Web Services. I like to work on
                building things from scratch.
              </p>
            </div>
          </div>
          <div className="Motto">
            <div className="Item">
              <div className="ItemBody">
                <h3 className="ItemHeader">
                  <span style={{ color: "#cccccc" }}>01. </span>
                  Research
                </h3>
                <p className="ItemContent">
                  Understand the client’s subject matter completely and build on
                  the knowledge related to it, becoming intimately familiar with
                  the subject matter. Determine methods to address the specific
                  customer’s needs and requirements.
                </p>
              </div>
            </div>
            <div className="Item">
              <div className="ItemBody">
                <h3 className="ItemHeader">
                  <span style={{ color: "#cccccc" }}>02. </span>
                  Design
                </h3>
                <p className="ItemContent">
                  Misleadingly thought of as the superficial appearance of a
                  product, design actually encompasses a lot more. It is a cross
                  functional process that includes market research, technical
                  research, design of a concept, and prototype mockup.
                </p>
              </div>
            </div>
            <div className="Item">
              <div className="ItemBody">
                <h3 className="ItemHeader">
                  <span style={{ color: "#cccccc" }}>03. </span>
                  Develop
                </h3>
                <p className="ItemContent">
                  Findings from the research and design phases are utilized for
                  the production of specific products including materials,
                  systems, and methods. Engineer utilizing the research and
                  designs to produce commercial products for the customer.
                </p>
              </div>
            </div>
          </div>
          <div className="WorkAndEducation">
            <h2 className="Header">Work Experience and Education</h2>
            <WorkAndEducation />
          </div>
          <div className="Skills">
            <h2 className="Header">Things I am Good at</h2>
            <Languages />
            <Frameworks />
            <Database />
          </div>
          <div className="Projects">
            <h2 className="Header">Few Things I worked on</h2>
            <Projects />
          </div>
          <div className="ContactRow">
            <div className="ResumeColumn">
              <div
                onClick={() =>
                  window.open(
                    "https://gnaneswar-resume.s3.us-east-2.amazonaws.com/Gnaneswar_Resume.pdf",
                    "_blank"
                  )
                }
                className="Resume"
              >
                My Resume
              </div>
            </div>
            <div className="ContactColumn">
              <Link style={{ color: "#4570e0" }} to="/contact">
                <div className="Contact">Contact Me !</div>
              </Link>
            </div>
          </div>
          <div className="AboutFooter">
            <Footer />
          </div>
          <span className="MenuIcon">
            <Icon
              onClick={this.toggleMenu}
              link
              name={menuActive ? "cancel" : "sidebar"}
              size="big"
            />
          </span>
          {backToTop && (
            <Button
              className="BackToTop"
              onClick={this.scrollToTop}
              circular
              icon="angle up"
              size="large"
            />
          )}
          {menuActive && <Menu className={menuClass} currentActive="about" />}
        </div>
      </Zoom>
    );
  }
}

import React from "react";

import { Link } from "react-router-dom";

import about from "./about.jpeg";
import { Grid, Image, Icon, Button } from "semantic-ui-react";

import Zoom from "react-reveal/Zoom";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import "./About.css";
import Menu from "../Menu";
import WorkAndEducation from "../WorkAndEducation";
import Skills from "../Skills";
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
      <Zoom>
        <div
          onScroll={this.handleScroll}
          ref={node => (this.bodyRef = node)}
          style={{ position: "relative", height: "100%" }}
        >
          <Grid stackable verticalAlign="middle">
            <Grid.Row className="AboutRow">
              <Grid.Column width={8}>
                <Image fluid src={about} />
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="AboutContent">
                  <h1 className="Heading">Gnaneswar Gandu</h1>
                  <p className="Content">
                    I am a Graduate Student pursuing my Master's degree in
                    Computer Science Major at{" "}
                    <b>The University of Texas at Dallas</b>. I specialize in
                    building full stack applications specific to the business
                    needs of the clients. I have done work in software
                    development, front-end/back-end web and database/server
                    management. I am also little bit into cloud technology
                    specifically Amazon Web Services. I like to work on building
                    things from scratch.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="equal" className="Motto">
              <Grid.Column className="Item">
                <div className="ItemBody">
                  <h3 className="ItemHeader">
                    <span style={{ color: "#cccccc" }}>01. </span>
                    Research
                  </h3>
                  <p className="ItemContent">
                    Understand the client’s subject matter completely and build
                    on the knowledge related to it, becoming intimately familiar
                    with the subject matter. Determine methods to address the
                    specific customer’s needs and requirements.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column className="Item">
                <div className="ItemBody">
                  <h3 className="ItemHeader">
                    <span style={{ color: "#cccccc" }}>02. </span>
                    Design
                  </h3>
                  <p className="ItemContent">
                    Misleadingly thought of as the superficial appearance of a
                    product, design actually encompasses a lot more. It is a
                    cross functional process that includes market research,
                    technical research, design of a concept, and prototype
                    mockup.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column className="Item">
                <div className="ItemBody">
                  <h3 className="ItemHeader">
                    <span style={{ color: "#cccccc" }}>03. </span>
                    Develop
                  </h3>
                  <p className="ItemContent">
                    Findings from the research and design phases are utilized
                    for the production of specific products including materials,
                    systems, and methods. Engineer utilizing the research and
                    designs to produce commercial products for the customer.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="WorkAndEducation">
              <Grid.Column width={16}>
                <h2 className="Header">Work Experience and Education</h2>
                <WorkAndEducation />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="Skills">
              <Grid.Column width={16}>
                <h2 className="Header">Things I am Good at</h2>
              </Grid.Column>
              <Grid.Column width={4} />
              <Grid.Column className="SkillsColumn" width={8}>
                <Skills wide="4" />
              </Grid.Column>
              <Grid.Column width={4} />
              <Grid.Column width={4} />
              <Grid.Column className="SkillsColumn" width={8}>
                <Skills wide="3" />
              </Grid.Column>
              <Grid.Column width={4} />
              <Grid.Column width={4} />
              <Grid.Column className="SkillsColumn" width={8}>
                <Skills wide="2" />
              </Grid.Column>
              <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row className="Projects">
              <Grid.Column width={16}>
                <h2 className="Header">Few Things I worked on</h2>
              </Grid.Column>
              <Grid.Column width={4} />
              <Grid.Column className="ProjectsColumn" width={8}>
                <Projects />
              </Grid.Column>
              <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row className="ContactRow">
              <Grid.Column className="ResumeColumn" width={8}>
                <div
                  onClick={() =>
                    window.open(
                      "https://gnaneswarportfolio.s3.amazonaws.com/Gnaneswar_Resume.pdf",
                      "_blank"
                    )
                  }
                  className="Resume"
                >
                  My Resume
                </div>
              </Grid.Column>
              <Grid.Column className="ContactColumn" width={8}>
                <Link style={{ color: "#4570e0" }} to="/contact">
                  <div className="Contact">Contact Me !</div>
                </Link>
              </Grid.Column>
              <Grid.Column width={16}>
                <Footer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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

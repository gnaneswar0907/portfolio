import React from "react";

import { Link } from "react-router-dom";

import { Icon, Grid, Button } from "semantic-ui-react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "./LandingPage.css";
import landingPage from "./landingpage.jpg";
import Menu from "../Menu";

export class LandingPage extends React.Component {
  state = { menuActive: false, menuClass: "" };

  toggleMenu = () => {
    const { menuActive, menuClass } = this.state;
    const newMenuClass = menuClass === "Menu" ? "MenuReverse" : "Menu";
    if (menuActive) {
      this.setState({ menuClass: newMenuClass }, () => {
        setTimeout(() => this.setState({ menuActive: !menuActive }), 1000);
      });
    } else {
      this.setState({ menuActive: !menuActive, menuClass: newMenuClass });
    }
  };

  render() {
    const { menuClass, menuActive } = this.state;
    return (
      <>
        <Zoom>
          <div className="LandingPage">
            <img
              className="Background"
              src={landingPage}
              alt="Landing Page"
              width="100%"
              height="100%"
            />
            <div className="HomeContent">
              <Fade>
                <h2 className="UserName">Gnaneswar Gandu</h2>
              </Fade>
              <Grid
                stackable
                className="GridContainer"
                padded
                columns={3}
                textAlign="center"
              >
                <Grid.Column width={3} />
                <Grid.Column
                  textAlign="center"
                  verticalAlign="bottom"
                  width={10}
                >
                  <section className="MainContent">
                    <Fade delay={1000} duration={1000}>
                      Not Any
                    </Fade>
                    <Fade delay={1500} duration={1000}>
                      Average
                    </Fade>
                    <Fade delay={2000} duration={1000}>
                      Software
                    </Fade>
                    <Fade delay={2500} duration={1000}>
                      Engineer
                    </Fade>
                    <Fade delay={3000} duration={1000}>
                      <p>
                        Get ready to turn your <i>ideas</i> into <i>reality</i>
                      </p>
                      <Button className="DownButton">
                        <Link
                          className="DownButton"
                          style={{ color: "white" }}
                          to="/about"
                        >
                          Get to Know Me
                        </Link>
                      </Button>
                    </Fade>
                  </section>
                </Grid.Column>
                <Grid.Column width={3} />
              </Grid>
              <Icon
                link
                onClick={this.toggleMenu}
                className="HomeMenu"
                name={menuActive ? "cancel" : "sidebar"}
                size="big"
              />
            </div>
            {menuActive && <Menu currentActive="home" className={menuClass} />}
          </div>
        </Zoom>
      </>
    );
  }
}

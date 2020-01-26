import React from "react";

import { Icon } from "semantic-ui-react";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "./LandingPage.css";
import Menu from "../Menu";

export class LandingPage extends React.Component {
  state = { menuActive: false, menuClass: "", iconDisabled: false };

  toggleMenu = () => {
    const { menuActive, menuClass } = this.state;
    const newMenuClass = menuClass === "Menu" ? "MenuReverse" : "Menu";
    if (menuActive) {
      this.setState({ menuClass: newMenuClass, iconDisabled: true }, () => {
        setTimeout(
          () => this.setState({ menuActive: !menuActive, iconDisabled: false }),
          1000
        );
        // this.setState({ menuActive: !menuActive });
      });
    } else {
      this.setState({ menuActive: !menuActive, menuClass: newMenuClass });
    }
  };

  render() {
    const { menuClass, menuActive, iconDisabled } = this.state;
    return (
      <Zoom>
        <div className="HomeContent">
          <div className="Background" />
          <Fade>
            <h2 className="UserName">Gnaneswar Gandu</h2>
          </Fade>
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
              <p className="SubContent">
                Get ready to turn your <i>ideas</i> into <i>reality</i>
              </p>
              <div className="DownButtonLabel">
                <p className="LabelContent">Get to know me</p>
                <IconButton href="/portfolio/about" className="DownButton">
                  <ChevronRightIcon fontWeight="bold" />
                </IconButton>
              </div>
            </Fade>
          </section>
          <Icon
            link
            disabled={iconDisabled}
            onClick={this.toggleMenu}
            className="HomeMenu"
            name={menuActive ? "cancel" : "sidebar"}
            size="big"
          />
          {menuActive && <Menu currentActive="home" className={menuClass} />}
        </div>
      </Zoom>
    );
  }
}

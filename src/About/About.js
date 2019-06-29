import React from "react";

import about from "./about.jpeg";
import { Grid, Image, Icon, Sidebar } from "semantic-ui-react";

import "./About.css";
import MySideBar from "../SideBar";
import { Menu } from "../Menu/Menu";

class About extends React.Component {
  state = { menuActive: false, menuClass: "" };

  toggleMenu = () => {
    const { menuActive, menuClass } = this.state;
    const newMenuClass = menuClass === "Menu" ? "MenuReverse" : "Menu";
    this.setState({ menuActive: !menuActive, menuClass: newMenuClass });
  };

  closeMenu = () => this.setState({ menuActive: false });

  render() {
    const { menuActive, menuClass } = this.state;
    return (
      <div style={{ position: "relative" }}>
        {/* <Sidebar.Pushable style={{ backgroundColor: "#cccccc" }}>
          <MySideBar
            visible={this.state.menuActive}
            handleSideBarHide={this.closeMenu}
          />
          <Sidebar.Pusher>
            
          </Sidebar.Pusher>
        </Sidebar.Pushable> */}
        <Grid stackable style={{ position: "relative" }} verticalAlign="middle">
          <Grid.Row className="AboutRow">
            <Grid.Column width={8}>
              <Image fluid src={about} />
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="AboutContent">
                <h1 className="Heading">Gnaneswar Gandu</h1>
                <p className="Content">
                  I am a seasoned software developer who has developed products
                  for various clients and many venture-backed businesses. I
                  specialize in building applications specific to the business
                  needs of my clients. I have done work in software development,
                  mobile app creation, front-end/back-end web, database/server
                  management, graphic design, and video game development.
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
                  Understand the client’s subject matter completely and build on
                  the knowledge related to it, becoming intimately familiar with
                  the subject matter. Determine methods to address the specific
                  customer’s needs and requirements.
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
                  product, design actually encompasses a lot more. It is a cross
                  functional process that includes market research, technical
                  research, design of a concept, and prototype mockup.
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
                  Findings from the research and design phases are utilized for
                  the production of specific products including materials,
                  systems, and methods. Engineer utilizing the research and
                  designs to produce commercial products for the customer.
                </p>
              </div>
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
        <Menu className={menuClass} />
      </div>
    );
  }
}

export default About;

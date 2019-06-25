import React from "react";

import { Icon, Grid, Sidebar, Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";

import landingPage from "./landingpage.jpg";
import "./LandingPage.css";

export class LandingPage extends React.Component {
  state = { visible: false };

  handleSideBar = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSideBarHide = () => this.setState({ visible: false });

  render() {
    return (
      <div className="LandingPage">
        <img
          className="Background"
          src={landingPage}
          alt="Landing Page"
          width="100%"
          height="100%"
        />
        <div className="HomeContent">
          <Sidebar.Pushable>
            <Sidebar
              animation="scale down"
              direction="top"
              visible={this.state.visible}
              onHide={this.handleSideBarHide}
            >
              <Menu className="HomeSideBar" fluid widths={4}>
                <Menu.Item className="MenuItem" active>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="./about" className="MenuItem">
                  About
                </Menu.Item>
                <Menu.Item className="MenuItem">Resume</Menu.Item>
                <Menu.Item className="MenuItem">Contact</Menu.Item>
              </Menu>
            </Sidebar>
            <Sidebar.Pusher>
              <Grid
                stackable
                className="GridContainer"
                padded
                columns={3}
                textAlign="center"
              >
                <Grid.Column floated="left" width={3}>
                  <h2 className="UserName">Gnaneswar Gandu</h2>
                </Grid.Column>
                <Grid.Column
                  textAlign="center"
                  verticalAlign="bottom"
                  width={10}
                >
                  <section className="MainContent">
                    Not Any Average Software Engineer
                    <p>
                      Get ready to turn your <i>ideas</i> into <i>reality</i>
                    </p>
                    <span>
                      <Icon
                        className="DownIcon"
                        size="tiny"
                        circular
                        name="angle down"
                      />
                    </span>
                  </section>
                </Grid.Column>
                <Grid.Column floated="right" textAlign="right" width={3}>
                  <Icon
                    link
                    onClick={this.handleSideBar}
                    className="HomeMenu"
                    name={this.state.visible ? "" : "sidebar"}
                    size="big"
                  />
                </Grid.Column>
              </Grid>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

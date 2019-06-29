import React from "react";

import { Icon, Grid, Sidebar } from "semantic-ui-react";

import MySideBar from "../SideBar";

import "./LandingPage.css";
import landingPage from "./landingpage.jpg";

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
            <MySideBar
              visible={this.state.visible}
              handleSideBarHide={this.handleSideBarHide}
            />
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
                    <Icon
                      className="DownIcon"
                      size="tiny"
                      circular
                      name="angle down"
                    />
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

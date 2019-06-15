import React from "react";

import { Container, Image, Modal, Button, Icon, Grid } from "semantic-ui-react";

import landingPage from "./landingpage.jpg";

import "./LandingPage.css";

export class LandingPage extends React.Component {
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
          {/* <h2 className="UserName">Gnaneswar Gandu</h2>
          <Icon name="bars" size="big" className="HomeMenu" />
          <section className="MainContent">
            Not Your Average Software Engineer
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
          </section> */}
          <Grid className="GridContainer" padded columns={3} textAlign="center">
            <Grid.Column floated="left" width={3}>
              <h2 className="UserName">Gnaneswar Gandu</h2>
            </Grid.Column>
            <Grid.Column verticalAlign="bottom" width={10}>
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
            <Grid.Column floated="right" width={3}>
              <Icon className="HomeMenu" name="bars" size="big" />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

import React from "react";

import mine from "./Mine.jpeg";
import { Grid, Image } from "semantic-ui-react";

import "./About.css";

class About extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image fluid src={mine} />
          </Grid.Column>
          <Grid.Column
            className="AboutColumn"
            textAlign="center"
            verticalAlign="middle"
            width={8}
          >
            <h2>Gnaneswar Gandu</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;

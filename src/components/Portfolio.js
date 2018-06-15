import React, { Component } from "react";
import "./../App.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import "typeface-roboto";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Kettlecat",
          description:
            "Who never dreamt of having a place to store and share their boilerplates?",
          img: "/images/me.jpg"
        },
        {
          title: "My Spots",
          description:
            "Want to know at any time how fare you are from your favorite spots?",
          img: "./images/me.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Grid container justify={"center"}>
        <Grid item xs={11}>
          <Paper elevation={4}>
            <div className="PortfolioContent">
              <img src={this.state.projects[0].img} />
              <Typography variant={"display1"}>
                {this.state.projects[0].title}
              </Typography>
              <Typography variant={"body2"}>
                {this.state.projects[0].description}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withTheme()(Portfolio);

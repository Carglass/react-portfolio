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
          img: "/images/kettlecat.png"
        },
        {
          title: "My Spots",
          description:
            "Want to know at any time how fare you are from your favorite spots?",
          img: "./images/myspots.png"
        }
      ]
    };

    this.listProjects = this.listProjects.bind(this);
  }

  listProjects() {
    return this.state.projects.map(project => (
      <Grid item xs={11} className="projectzone">
        <Paper elevation={4}>
          <Grid container spacing={16}>
            <Grid item xs={3}>
              <img src={project.img} />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant={"display1"}>{project.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={"body2"}>
                    {project.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  }

  render() {
    return (
      <Grid container spacing={32} justify={"center"}>
        {this.listProjects()}
      </Grid>
    );
  }
}

export default withTheme()(Portfolio);

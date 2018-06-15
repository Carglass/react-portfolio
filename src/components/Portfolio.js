import React, { Component } from "react";
import "./../App.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
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
          img: "/images/kettlecat.png",
          githubLink: "https://github.com/Carglass/kettlecat"
        },
        {
          title: "My Spots",
          description:
            "Want to know at any time how far you are from your favorite spots?",
          img: "./images/myspots.png",
          githubLink: "https://github.com/Carglass/mySpots"
        }
      ]
    };

    this.listProjects = this.listProjects.bind(this);
  }

  listProjects() {
    return this.state.projects.map(project => (
      <Grid item xs={10} className="projectzone">
        <Paper elevation={4}>
          <Grid container spacing={16}>
            <Grid item xs={3}>
              <img src={project.img} className={"img-portfolio"} />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant={"display1"}>
                    {project.title}{" "}
                    <a href={project.githubLink}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </Typography>
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

import React from "react";
import "./../App.css";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid, Chip } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import Portfolio from "./Portfolio";
import "typeface-roboto";
import ContactForm from "./ContactForm";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faStackOverflow from "@fortawesome/fontawesome-free-brands/faStackOverflow";

const MainView = props => {
  if (props.page === 0) {
    return (
      <Grid container spacing={32} justify={"center"}>
        <Grid item xs={10}>
          <Paper elevation={4}>
            <Grid container spacing={32}>
              <Grid item xs={3}>
                <img src={"./images/me.jpg"} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant={"body2"}>
                  System Engineer with five years of experience in medical IT.
                  My expertise on the products, the regulatory constraints, and
                  the business needs, combined with my ability to find adapted
                  solutions, has allowed me to grow into a technical leader.
                  Known to be a reliable colleague who is always happy to share
                  my knowledge and expertise to maximize efficiency. Proven
                  ability to successfully train newcomers in my department. I
                  also keep on building new skills, currently learning about
                  full-stack web development like React, Express, Django, Mongo.
                  An insatiable learner, I am looking for new challenges, new
                  products, that will allow me to further dive into high
                  technology, and solutions that help people when life is the
                  most challenging.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Chip label="Javascript" />
                <Chip label="HTML" />
                <Chip label="CSS" />
                <Chip label="React" />
                <Chip label="Node" />
                <Chip label="Express" />
                <Chip label="Sequelize" />
                <Chip label="Mongoose" />
                <Chip label="Python" />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={32} justify="space-around">
                  <Grid item xs={12}>
                    <a href={"https://github.com/Carglass"}>
                      <FontAwesomeIcon icon={faGithub} className={"icon"} />
                    </a>
                    <a
                      href={
                        "https://www.linkedin.com/in/maxime-burlat-56028748"
                      }
                    >
                      <FontAwesomeIcon icon={faLinkedin} className={"icon"} />
                    </a>
                    <a
                      href={
                        "https://stackexchange.com/users/7440262/maxime-burlat"
                      }
                    >
                      <FontAwesomeIcon
                        icon={faStackOverflow}
                        className={"icon"}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  } else if (props.page === 1) {
    return <Portfolio />;
  } else if (props.page === 2) {
    return <ContactForm />;
  }
};

export default withTheme()(MainView);

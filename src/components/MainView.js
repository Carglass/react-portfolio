import React from "react";
import "./../App.css";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import Portfolio from "./Portfolio";
import "typeface-roboto";
import ContactForm from "./ContactForm";

const MainView = props => {
  if (props.page === 0) {
    return (
      <Grid container spacing={32} justify={"center"}>
        <Grid item xs={11}>
          <Paper elevation={4}>
            <div className="aboutContent">
              <img src={"./images/me.jpg"} />
              <Typography variant={"body2"}>
                System Engineer with five years of experience in medical IT. My
                expertise on the products, the regulatory constraints, and the
                business needs, combined with my ability to find adapted
                solutions, has allowed me to grow into a technical leader. Known
                to be a reliable colleague who is always happy to share my
                knowledge and expertise to maximize efficiency. Proven ability
                to successfully train newcomers in my department. I also keep on
                building new skills, currently learning about full-stack web
                development like React, Express, Django, Mongo. An insatiable
                learner, I am looking for new challenges, new products, that
                will allow me to further dive into high technology, and
                solutions that help people when life is the most challenging.
              </Typography>
            </div>
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

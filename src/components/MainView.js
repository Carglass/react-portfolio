import React from "react";
import "./../App.css";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import "typeface-roboto";

const MainView = props => {
  if (props.page === 0) {
    return (
      <Grid container justify={"center"}>
        <Grid item xs={11}>
          <Paper elevation={4}>About</Paper>
        </Grid>
      </Grid>
    );
  } else if (props.page === 1) {
    return <Typography variant={"body1"}>Portfolio</Typography>;
  } else if (props.page === 2) {
    return <Typography variant={"body1"}>Contact</Typography>;
  }
};

export default withTheme()(MainView);

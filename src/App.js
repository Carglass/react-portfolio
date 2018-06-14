import React, { Component } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import withTheme from "@material-ui/core/styles/withTheme";
import "typeface-roboto";
import { Grid, Tabs, Tab, AppBar } from "@material-ui/core";
import MainView from "./components/MainView";

class App extends Component {
  constructor(props) {
    super(props);

    this.VIEW = {
      ABOUT: 0,
      PORTFOLIO: 1,
      CONTACT: 2
    };

    this.state = {
      page: this.VIEW.ABOUT
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(event, value) {
    this.setState({ page: value });
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={24} alignItems={"flex-end"}>
          <Grid item xs={12}>
            <AppBar position="static" color="primary">
              <Grid container spacing={24} alignItems={"flex-end"}>
                <Grid item xs={4}>
                  <Typography variant="display2" color="secondary">
                    Maxime Burlat
                  </Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={5}>
                  <Tabs value={this.state.page} onChange={this.changePage}>
                    <Tab label="About" />
                    <Tab label="Portfolio" />
                    <Tab label="Contact" />
                  </Tabs>
                </Grid>
              </Grid>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <MainView page={this.state.page} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTheme()(App);

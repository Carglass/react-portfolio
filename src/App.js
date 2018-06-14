import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import 'typeface-roboto';
import { Grid, Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24} alignItems={'flex-end'}>
          <Grid item xs={4}>
          <Typography variant="display2">Maxime Burlat</Typography>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={6}>
          <Button href="#text-buttons">
            About
          </Button>
          <Button href="#text-buttons">
            Portfolio
          </Button>
          <Button href="#text-buttons">
            Contact
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTheme()(App);

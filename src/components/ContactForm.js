import React, { Component } from "react";
import "./../App.css";
import { Paper, Grid, Typography, TextField } from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import "typeface-roboto";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      content: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Grid container spacing={32} justify={"center"}>
        <Grid item xs={10}>
          <Paper elevation={4} className="contact-paper">
            <Grid container spacing={16} direction="column">
              <Grid item xs={4}>
                <Typography variant={"display2"}>Contact</Typography>
              </Grid>
              <form noValidate autoComplete="off">
                <Grid item xs={4}>
                  <TextField
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="content"
                    label="Your message"
                    value={this.state.content}
                    multiline
                    rows="4"
                    onChange={this.handleChange("content")}
                    margin="normal"
                  />
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withTheme()(ContactForm);

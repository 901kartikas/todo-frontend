import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {Redirect} from 'react-router-dom'

export default class SignUp extends Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      fullname: this.fullname,
      username: this.username,
      email: this.email,
      password: this.password
    }

    axios.post("http://localhost:5000/api/ApplicationUser/Register",data)
      .then((res) => {
        console.log(res);
        this.setState({
          registSuccess: true
        });
      })
      .catch (err => {
        console.log(err);
      })
  };

  render() {
    if (this.state.registSuccess) {
      return <Redirect to={'/'}/>;
    }

    return (
      <div>
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form  onSubmit={this.handleSubmit} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Fullname"
            autoFocus
            onChange={e => this.fullname = e.target.value}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            onChange={e => this.username = e.target.value}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            autoFocus
            onChange={e => this.email = e.target.value}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => this.password = e.target.value}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      <Box mt={8}></Box>
    </Container>
      </div>
    )
  }
}

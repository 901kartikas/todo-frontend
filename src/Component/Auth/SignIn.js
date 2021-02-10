import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {Redirect} from 'react-router-dom'

export default class SignIn extends Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password
    }

    axios.post("http://localhost:5000/api/ApplicationUser/Login",data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        this.setState({
          loggedIn: true
        });
      })
      .catch (err => {
        this.setState({
          message: err.response.data.message
          })
      })
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={'/home'}/>;
    }

    let error = '';

    if(this.state.message) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      )
    }

    return (
      <div>
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  onSubmit={this.handleSubmit} noValidate>
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/daftar" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      <Box mt={8}></Box>
      {error}
    </Container>
      </div>
    )
  }
}

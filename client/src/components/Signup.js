import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { signup } from "../services/api";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import "../css/Signup.scss";

export default class Signup extends Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, firstName, lastName, password } = this.state;

    signup(username, firstName, lastName, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          firstName: "",
          lastName: "",
          password: ""
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/main");
      }
    });
  };

  render() {
    return (
      <div className="signupContainer">
        <div className="signupHolder">
          <h2>Create your account</h2>
          <form
            id="formHolderSignup"
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              type="text"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="username"
            />
            <TextField
              id="outlined-name"
              label="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="firstName"
            />
            <TextField
              id="outlined-name"
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="lastName"
            />
            <TextField
              id="outlined-name"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />

            {this.state.message && (
              <Alert variant="danger">{this.state.message}</Alert>
            )}
            <Button type="submit" id="signupBtn2">
              <h5>Sign up</h5>
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

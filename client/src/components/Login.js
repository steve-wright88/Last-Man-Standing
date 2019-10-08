import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { login } from "../services/api";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import "../css/Login.scss";

export default class Login extends Component {
  state = {
    username: "",
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

    const { username, password } = this.state;

    login(username, password).then(data => {
      console.log("data..login Login", data);
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/main");
      }
    });
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="loginHolder">
          <h2>Log in to LMS</h2>
          <form
            id="formHolderLogin"
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
            <Button type="submit" id="loginBtn2">
              <h5>Log in</h5>
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

// <Form onSubmit={this.handleSubmit}>
//               <Form.Group>
//                 <Form.Label htmlFor="username">Username: </Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="username"
//                   value={this.state.username}
//                   onChange={this.handleChange}
//                   id="username"
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="password">Password: </Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                   id="password"
//                 />
//               </Form.Group>
//               </Form>

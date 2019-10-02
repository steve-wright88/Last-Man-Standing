import React, { Component } from "react";
import { signup } from "../services/api";

export default class Signup extends Component {
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

    signup(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        // successfully signed up
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/projects");
      }
    });
  };

  render() {
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <form>
            <form htmlFor="username">Username: </form>
            <form
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
          </form>
          <form>
            <form htmlFor="password">Password: </form>
            <form
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
          </form>
          {this.state.message && <alert>{this.state.message}</alert>}
          <button type="submit">Signup</button>
        </form>
      </>
    );
  }
}

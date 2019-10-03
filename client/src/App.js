import React from "react";
import TopNav from "./components/TopNav";
import Head from './components/Head';
import CompetitionTable from './components/CompetitionTable';
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <TopNav user={this.state.user} setUser={this.setUser} />

        {/* prevent a non-logged in user to access certain paths */}
        {/* <Route
          exact
          path="/projects"
          render={props => {
            if (this.state.user) return <Projects {...props} />;
            else return <Redirect to="/" />;
          }}
        /> */}

        <Route
          exact
          path="/"
          render={props => <Home setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/signup"
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }

  export default App;

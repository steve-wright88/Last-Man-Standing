import React from "react";
import TopNav from "./components/TopNav";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import Rules from "./components/Rules";

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
        <Route
          exact
          path="/main"
          render={props => {
            if (this.state.user)
              return <Main {...props} user={this.state.user} />;
            else return <Redirect to="/" />;
          }}
        />

        <Route exact path="/" render={props => <Home />} />

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
        <Route exact path="/rules" render={props => <Rules />} />
      </div>
    );
  }
}

export default App;

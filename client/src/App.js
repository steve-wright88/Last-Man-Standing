import React from "react";
import TopNav from "./components/TopNav";
// import Head from "./components/Head";
// import CompetitionTable from "./components/CompTable/CompetitionTable";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
// import Main from "./components/Main";
import CompWelcome from "./components/head/CompWelcome";
import Dropdown from "./components/head/Dropdown";
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
        <Dropdown />

        {/* prevent a non-logged in user to access certain paths */}
        {/* <Route
          exact
          path="/main"
          render={props => {
            if (this.state.user) return <Main {...props} />;
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

        <CompWelcome />
      </div>
    );
  }
}

export default App;

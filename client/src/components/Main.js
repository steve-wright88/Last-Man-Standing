import React, { Component } from "react";
import Head from "./Head";
import CompetitionTable from "../components/CompTable/CompetitionTable";
import axios from "axios";

import "../css/Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/api/usersChoices").then(response => {
      this.setState({
        users: response.data
      });
      console.log("state.items;", this.state.users);
    });
  };
  render() {
    return (
      <div className="mainContainer">
        <Head user={this.props.user} getData={this.getData} />
        <CompetitionTable user={this.state.users} />
      </div>
    );
  }
}

export default Main;

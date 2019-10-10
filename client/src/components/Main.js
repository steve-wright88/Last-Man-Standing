import React, { Component } from "react";
import Head from "./Head";
import CompetitionTable from "../components/CompTable/CompetitionTable";
import BottomNav from "./BottomNav";
import axios from "axios";

import "../css/Main.scss";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    users: []
  };
  // }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/api/usersChoices").then(response => {
      this.setState({
        users: response.data
      });
    });
  };
  render() {
    return (
      <>
        <div className="mainContainer">
          <Head user={this.props.user} getData={this.getData} />
          <CompetitionTable users={this.state.users} />
        </div>
        <BottomNav />
      </>
    );
  }
}

export default Main;

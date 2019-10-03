import React, { Component } from "react";
import axios from "axios";

export default class Dropdown extends Component {
  state = {
    available: []
  };

  componentDidMount() {
    axios.get("/api/availableTeams").then(response => {
      this.setState({
        available: response.data
      });
    });
  }

  render() {
    console.log(this.state.available);
    return (
      <div>
        {this.state.available.map(el => {
          return <p key={el.team}>{el.team}</p>;
        })}
      </div>
    );
  }
}

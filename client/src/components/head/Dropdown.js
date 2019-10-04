import React, { Component } from "react";
import axios from "axios";

/*################### styles ###################*/
import { FormControl, Select, MenuItem, Button } from "@material-ui/core";
/*################### /styles ##################*/

export default class Dropdown extends Component {
  state = {
    available: [],
    chosenTeam: "select a team"
  };

  componentDidMount() {
    axios.get("/api/availableTeams").then(response => {
      this.setState({
        available: response.data
      });
    });
  }

  refreshData = () => {
    axios.get("/api/availableTeams").then(response => {
      this.setState({
        available: response.data
      });
    });
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState(
      {
        chosenTeam: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("...", this.state.chosenTeam);
    axios.post("api/pick/9", { team: this.state.chosenTeam }).then(() => {
      //FIX THIS!!!!!!!!!!!!
      this.refreshData();
    });
    this.setState({
      chosenTeam: "select a team"
    });
  };

  render() {
    console.log(this.state.available);
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <Select
            onChange={this.handleChange}
            renderValue={() => <em>{this.state.chosenTeam}</em>}
            value={this.state.chosenTeam}
          >
            {this.state.available.map(el => {
              return (
                <MenuItem key={el.team} value={el.team}>
                  {el.team}
                </MenuItem>
              );
            })}
          </Select>
          <Button type="submit">SUBMIT</Button>
        </FormControl>
      </form>
    );
  }
}

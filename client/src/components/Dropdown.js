import React, { Component } from "react";
import axios from "axios";

/*################### styles ###################*/
import { Select, MenuItem, Button } from "@material-ui/core";
import "../css/Dropdown.scss";
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
      () => {}
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("api/pick/2", { team: this.state.chosenTeam }).then(() => {
      //FIX THIS!!!!!!!!!!!!
      this.refreshData();
      this.props.getData();
    });
    this.setState({
      chosenTeam: "select a team"
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   axios
  //     .post("api/pick/7", { team: this.state.chosenTeam })
  //     .then(data => this.setState({
  //       team: [data.config.data.team]; //chosen team
  //     })
  // };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="dropdownContainer">
          <Select
            onChange={this.handleChange}
            renderValue={() => <em>{this.state.chosenTeam}</em>}
            value={this.state.chosenTeam}
            id="selectField"
          >
            {this.state.available.map(el => {
              return (
                <MenuItem id="teamField" key={el.team} value={el.team}>
                  {el.team}
                </MenuItem>
              );
            })}
          </Select>
          <Button variant="outlined" type="submit" id="teamSubmitBtn">
            SUBMIT
          </Button>
        </form>
        <hr />
      </>
    );
  }
}

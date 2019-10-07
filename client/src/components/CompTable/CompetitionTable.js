import React, { Component } from "react";
import "../../css/Comptable.scss";
// import PlayerRounds from './PlayerRounds';
// import PlayerName from './PlayerName';
import axios from "axios";

class CompetitionTable extends Component {
  state = {
    users: []
  };

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
    console.log("State: ", this.state);

    return (
      <div>
        <table className="table">
          <tr id="playerRow">
            <th>Player</th>
            <th>Round 1</th>
            <th>Round 2</th>
            <th>Round 3</th>
            <th>Round 4</th>
            <th>Round 5</th>
            <th>Round 6</th>
            <th>Round 7</th>
          </tr>

          {this.state.users.map(user => (
            <tr>
              <td>
                {user.firstName}
                <br />
                {user.lastName}
              </td>
              {user.choices.map(el => (
                <td>{el.team}</td>
              ))}
            </tr>
          ))}

          {/* for every user in this.state.users create a tr with a td with just the username */}
        </table>
      </div>
    );
  }
}

export default CompetitionTable;

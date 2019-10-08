import React, { Component } from "react";
import "../../css/Comptable.scss";
import axios from "axios";

class CompetitionTable extends Component {
  // state = {
  //   users: []
  // };

  // componentDidMount() {
  //   this.getData();
  // }

  // getData = () => {
  //   axios.get("/api/usersChoices").then(response => {
  //     this.setState({
  //       users: response.data
  //     });
  //     console.log();
  //     console.log("state.items;", this.state.users);
  //   });
  // };

  render() {
    console.log("State: ", this.props);

    return (
      <div className="wrapper">
        <div className="scroller">
          <table className="table">
            <thead>
              <tr className="playerRow">
                <th className="sticky">Player</th>

                {Array(20)
                  .fill(0)
                  .map((el, i) => (
                    <th>Round {i + 1}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {this.props
                ? this.props.user.map(user => (
                    <tr>
                      <td className="sticky">
                        {user.firstName} {user.lastName}
                      </td>
                      {user.choices.map(el => (
                        <td>{el.team}</td>
                      ))}
                    </tr>
                  ))
                : ""}
            </tbody>

            {/* for every user in this.state.users create a tr with a td with just the username */}
          </table>
        </div>
      </div>
    );
  }
}

export default CompetitionTable;

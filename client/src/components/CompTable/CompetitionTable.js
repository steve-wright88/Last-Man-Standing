import React, { Component } from "react";
import "../../css/Comptable.scss";

class CompetitionTable extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="scroller">
            <table className="table">
              <thead>
                <tr className="playerRow">
                  <th className="sticky">Player</th>

                  {Array(6)
                    .fill(0)
                    .map((el, i) => (
                      <th key={i}>Round {i + 1}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {this.props
                  ? this.props.users
                      .filter(user => user.inGame)
                      .sort((a, b) => a.firstName.localeCompare(b.firstName))
                      .map((user, i) => (
                        <tr>
                          <td className="sticky">
                            {user.firstName} {user.lastName}
                          </td>
                          {user.choices.map((el, i) => (
                            <td className={el.status} key={Date.now()}>
                              {el.team}
                            </td>
                          ))}
                        </tr>
                      ))
                  : ""}
              </tbody>

              {/* for every user in this.state.users create a tr with a td with just the username */}
            </table>
          </div>
        </div>
        {/* #################################################### - OUT TABLE - #################################################### */}
        <div className="wrapperOut">
          <div className="scrollerOut">
            <table className="tableOut">
              <thead>
                <tr className="playerRowOut">
                  <th className="stickyOut">Player</th>

                  {Array(6)
                    .fill(0)
                    .map((el, i) => (
                      <th>Round {i + 1}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {this.props
                  ? this.props.users
                      .filter(user => !user.inGame)
                      .sort((a, b) => a.firstName.localeCompare(b.firstName))
                      .map((user, i) => (
                        <tr key={Date.now()}>
                          <td className="stickyOut">
                            {user.firstName} {user.lastName}
                          </td>
                          {user.choices.map((el, i) => (
                            <td className={el.status} key={Date.now()}>
                              {el.team}
                            </td>
                          ))}
                        </tr>
                      ))
                  : ""}
              </tbody>

              {/* for every user in this.state.users create a tr with a td with just the username */}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default CompetitionTable;

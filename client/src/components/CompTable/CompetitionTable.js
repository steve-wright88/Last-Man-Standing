import React, { Component } from 'react';
import "../../css/Comptable.scss"
import PlayerRounds from './PlayerRounds';
import PlayerName from './PlayerName';
import axios from "axios";

class CompetitionTable extends Component {
  state = {
    choices: [
      { user: "heya", team: "Arsenal", round: 1 }, 
      { user: "heya2", team: "Liverpool", round: 1 }
    ]
  }

  // componentDidMount(){
  //   axios.get("/").then(playerList=>{
  //     this.setState({players:playerList})
  //   })
  // }


  render() {
    return (
      <div className="containerRow">
        <div>
          <h1>Players</h1>
          {this.state.choices.map((x) => {
            return <h2> {x.user} </h2>
          })}
        </div>

        <div>

          <h1>Round1</h1>
          {this.state.choices.map((x) => {
              return <h2>{x.team} </h2>
            })}
            
        </div>

        {/* <table className='CompTable'>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
          <PlayerRounds/>
          <NamePicks/>
      </table> */}
      </div>)
  }
}

export default CompetitionTable
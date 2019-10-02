import React from 'react';
import PlayerRow from './PlayerRow';

function CompetitionTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Player</th>
          <th>Round 1</th>
          <th>Round 2</th>
          <th>Round 3</th>
        </tr>
        <PlayerRow />
      </table>
    </div>
  )
}

export default CompetitionTable

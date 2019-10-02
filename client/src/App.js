import React from 'react';
import './App.css';
import Head from './components/Head';
import BottomNav from './components/BottomNav';
import CompetitionTable from './components/CompetitionTable';
import PlayerRow from './components/PlayerRow';


function App() {
  return (
    <div className="App">
      <h1>Last Man Standing</h1>
      <Head />
      <CompetitionTable />
      <BottomNav />
    </div>
  );
}

export default App;

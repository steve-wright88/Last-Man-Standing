import React from "react";
import TopNav from "./components/TopNav";
import BottomNavigation from "./components/BottomNav";
import Head from './components/Head';
import CompetitionTable from './components/CompetitionTable';


import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <h1>Last Man Standing</h1>
        <Head />
        <CompetitionTable />
        <BottomNavigation />
      </div>
    );
  }
}

export default App;

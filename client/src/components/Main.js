import React from "react";
import Head from "./Head";
import CompetitionTable from '../components/CompTable/CompetitionTable';

import "../css/Main.scss";

const Main = props => {
  return (
    <div className="mainContainer">
      <Head user={props.user} />
      {/* <CompWelcome user={props.user} /> */}
      <CompetitionTable />
    </div>
  );
};

export default Main;


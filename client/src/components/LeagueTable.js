import React from "react";
import BottomNav from "./BottomNav";

const LeagueTable = () => {
  return (
    <>
      <div className="leagueTable">
        <iframe
          className="iframe"
          id="sofa-standings-embed-1-23776"
          width="100%"
          height="100vh"
          style={{ height: "100vh" }}
          src="https://www.sofascore.com/tournament/1/23776/standings/tables/embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
        {/* <div
      // style="font-size:12px;font-family:Arial,sans-serif"
      >
        Standings provided by{" "}
        <a target="_blank" href="https://www.sofascore.com/">
          Sofascore LiveScore
        </a>
      </div> */}
        {/* <script
        type="text/javascript"
        src="https://www.sofascore.com/bundles/sofascoreweb/js/bin/util/embed.min.js"
      ></script>
      <script type="text/javascript">
        sofa_embed('sofa-standings-embed-1-23776', window);
      </script> */}
      </div>
      <BottomNav />
    </>
  );
};

export default LeagueTable;

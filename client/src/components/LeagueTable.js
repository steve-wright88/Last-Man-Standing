import React from "react";
import Iframe from "react-iframe";

const LeagueTable = () => {
  return (
    <div>
      <Iframe
        id="sofa-standings-embed-1-23776"
        width="100%"
        height="726px"
        style="height:726px!important"
        src="https://www.sofascore.com/tournament/1/23776/standings/tables/embed"
        frameborder="0"
        scrolling="no"
      ></Iframe>
      <div style="font-size:12px;font-family:Arial,sans-serif">
        Standings provided by{" "}
        <a target="_blank" href="https://www.sofascore.com/">
          Sofascore LiveScore
        </a>
      </div>
      <script
        type="text/javascript"
        src="https://www.sofascore.com/bundles/sofascoreweb/js/bin/util/embed.min.js"
      ></script>
      <script type="text/javascript">
        sofa_embed('sofa-standings-embed-1-23776', window);
      </script>
    </div>
  );
};

export default LeagueTable;

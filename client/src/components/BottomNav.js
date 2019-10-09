import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import EventIcon from "@material-ui/icons/Event";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import LeagueTable from "./LeagueTable";

import "../css/BottomNav.scss";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottomNav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className="bottomNavStyle"
          label="Competition"
          icon={<SportsSoccerIcon />}
        />
        <BottomNavigationAction
          className="bottomNavStyle"
          label="League Table"
          icon={<FormatListNumberedIcon />}
        />
        <BottomNavigationAction
          className="bottomNavStyle"
          label="Fixtures"
          icon={<EventIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import EventIcon from "@material-ui/icons/Event";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

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
          component={Link}
          to="/main"
          className="bottomNavStyle"
          label="Competition"
          icon={<SportsSoccerIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/leaguetable"
          className="bottomNavStyle"
          label="League Table"
          icon={<FormatListNumberedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/fixtures"
          className="bottomNavStyle"
          label="Fixtures"
          icon={<EventIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

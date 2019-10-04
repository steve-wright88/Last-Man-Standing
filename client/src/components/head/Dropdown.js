import React, { Component } from "react";
import axios from "axios";

/*################### styles ###################*/
import { withStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem, ListItemText } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);
/*################### /styles ###################*/

export default class Dropdown extends Component {
  state = {
    available: []
  };

  componentDidMount() {
    axios.get("/api/availableTeams").then(response => {
      this.setState({
        available: response.data
      });
    });
  }

  render() {
    console.log(this.state.available);
    return (
      <div>
        {this.state.available.map(el => {
          return <p key={el.team}>{el.team}</p>;
        })}
      </div>
    );
  }
}

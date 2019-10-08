import React from "react";
import { logout } from "../services/api";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
  MenuItem,
  Menu,
  Fade
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "../css/TopNav.scss";

function TopNav(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = props => {
    logout().then(() => {
      props.setUser(null);
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box display="flex">
      <AppBar position="fixed" id="TopNav">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              <Link to="/" id="logo">
                LMS
              </Link>
            </Typography>
            <IconButton
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon id="logo" />
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link id="menuitem" to="/rules">
                  How to play
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link id="menuitem" to="/" onClick={() => handleLogout(props)}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// <nav>
//   {props.user && <section>Welcome, {props.user.username}</section>}
//   <section>
//     <Link to="/">LMS</Link>
//   </section>

//   {props.user ? (
//     <>
//       <section>
//         <Link to="/">LMS</Link>
//       </section>
//       <section>
//         <Link to="/" onClick={() => handleLogout(props)}>
//           Logout
//         </Link>
//       </section>
//     </>
//   ) : (
//     <>
//       <section>
//         <Link to="/signup">Signup</Link>
//       </section>
//       <section>
//         <Link to="/login">Login</Link>
//       </section>
//     </>
//   )}
// </nav>

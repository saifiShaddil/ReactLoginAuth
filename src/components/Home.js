import React from "react";
import { useStateValue } from "../StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import '../css/home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Home() {
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const history = useHistory();

  const Logout = () => {
    auth.signOut();
  };

  const Redirect = () => {
    history.push("/login");
  };
  return (
    <>
    <div className="bg"></div>
    <div className="bg1"></div>
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
              Wecome
            </Typography>
            {user?.email ? (
              <Button color="inherit" onClick={Logout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={Redirect}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <div className="home__info">
          <Typography variant="h1" color="primary" >
            {!user ? "Please Login First" : (
              `Welcome ${user.displayName || user?.email}`
            )}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Home;

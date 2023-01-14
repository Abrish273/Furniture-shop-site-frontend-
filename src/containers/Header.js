import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

  title_1: {
    flexGrow: 0.01,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,212,255,1) 100%)",
          color: "white",
        }}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Furniture
          </Typography>

          <Typography variant="h6" className={classes.title_1}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title_1}>
            About
          </Typography>
          <Typography variant="h6" className={classes.title_1}>
            Features
          </Typography>

          <Typography variant="h6" className={classes.title_1}>
            Contact Us
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

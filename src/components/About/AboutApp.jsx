import React from "react";
import img from "./man.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    width: "400px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const mainDiv = {
  width: "400px",
  height: "400px",
  backgroundColor: "gray",
  borderRadius: "10px",
};

const sectionn = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "0px",
   padding: "12px", 
   marginBottom: "-100px",
};
const AboutApp = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <div style={sectionn} >
        <div style={mainDiv}>
          <h1>Application</h1>
        </div>
      </div>
    </>
  );
};

export default AboutApp;

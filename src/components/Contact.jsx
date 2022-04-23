import React from "react";
import img from './man.jpg'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    width:'400px',
  
    
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
const mainDiv ={

  width:"400px",
  height:"400px",
  backgroundColor:'gray',
  borderRadius: "10px"

}

const sectionn ={
    display: "flex",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "0px"
}
const Contact = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
     
     <div style={sectionn}>
          <div style={mainDiv}>
             
              <h2>About Us</h2>
              <p>Going to college and prepping for the “real world” is not easy.
                   Dealing with grades, studying, bills, pressure from your parents,
                    and having to answer the big question: “What should I do with my life?“
                    , means there are a lot of expectations on your plate</p>
                    <div className="logos">
                   <a  className="socal" href="https://www.linkedin.com/in/anil-babu-19958a208"><i className="fab fa-linkedin "></i></a>
                    
                    <a className="socal" href="https://www.facebook.com/profile.php?id=100041724041773"><i className="fab fa-facebook"></i></a>
                    
                    <a className="socal" href="https://twitter.com/AnilBab10138171?t=JbSlKFwwYdtSyZDMNkdXtw&s=08"><i className="fab fa-twitter"></i></a>
                  
                  <a className="socal" href="https://github.com/Anilpateel"><i className="fab fa-github"></i></a>
                   
                   <a className="socal" href="https://www.instagram.com/gangwar1304/"><i className="fab fa-instagram"></i></a>
                   <a className="socal" href="https://api.whatsapp.com/send?phone=917505786956&text=hiii%2C%2Chow%20are%20you"><i className="fab fa-whatsapp"></i></a>
               </div>
              </div>
              
           
              </div>
      
    </>
  );
};

export default Contact;

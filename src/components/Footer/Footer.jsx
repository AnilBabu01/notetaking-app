import React from "react";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link,} from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="footercontent">
          <div className="phonecon">
            <Typography variant="h4" style={{ fontWeight: "400" }}>
              Notetake 
            </Typography>
            <div className="mardivcontent">
              <Typography>New Notetake app</Typography>
              <Typography>Easy to use</Typography>
              <Typography>software</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6"  style={{ fontWeight: "400" }}>Explore</Typography>
            <div className="mardivcontent">
              <Typography>Home</Typography>
              <Typography>About us</Typography>
              <Typography>Register/Login</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6"  style={{ fontWeight: "400" }}>Legal</Typography>
            <div className="mardivcontent">
              <Typography>Tearm & Condition</Typography>
              <Typography>Privacy policy</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6"  style={{ fontWeight: "400" }}>Business</Typography>
            <div className="mardivcontent">
              <Typography>anilb9850@gmail.com</Typography>
              <Typography>+91-750578956</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6"  style={{ fontWeight: "400" }}>Addreass</Typography>
            <div className="mardivcontent">
              <Typography>News xyz market</Typography>
              <Typography>Bhauwala Tilwari Road</Typography>
              <Typography>Uttarakhand-244007</Typography>
            </div>
          </div>
        </div>
        <div className="pincodediv">
          <div style={{ display: "flex" }}>
            <svg
               className="svgphone"
              width="20"
              height="20"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.52 28.56C44.64 28.8 45.96 33.16 46.04 35.2H53.2C52.88 27.28 47.24 22.44 39.4 22.44C30.56 22.44 24 28 24 40.56C24 48.32 27.72 57.52 39.36 57.52C48.24 57.52 53 50.92 53.12 45.72H45.96C45.84 48.08 44.16 51.24 39.44 51.48C34.2 51.32 32 47.24 32 40.56C32 29 37.12 28.64 39.52 28.56ZM40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM40 72C22.36 72 8 57.64 8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72Z"
                fill="white"
              />
            </svg>

            <Typography style={{ paddingLeft: "10px" }}>
              2022 Notetake. All right reserved
            </Typography>
          </div>
          <div>
            <Typography>Made with by Anil Babu</Typography>
          </div>
        </div>
        <div className="hrdiv">
          <hr style={{ color: "white", border: "1px solid #f8f2f2" }} />
        </div>
       
        <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100041724041773">
          <div className="iconmain">
            <div className="icondiv5">
               <FacebookIcon />
            </div>
          </div>
          </a>
          <a href="https://twitter.com/AnilBab10138171?t=JbSlKFwwYdtSyZDMNkdXtw&s=08"></a>
          <div className="iconmain">
            <div className="icondiv5">
              <TwitterIcon />
            </div>
          </div>
        <a href="https://www.instagram.com/gangwar1304/">
          <div className="iconmain">
            <div className="icondiv5">
              <InstagramIcon />
            </div>
          </div>
          </a>
          <Link to="https://github.com/Anilpateel">
            
          <div className="iconmain">
            <div className="icondiv5">
              
              <GitHubIcon />
            </div>
          </div>
          </Link>
          <a href="https://www.linkedin.com/in/anil-babu-19958a208">
          <div className="iconmain">
            <div className="icondiv5">
              <LinkedInIcon/>
            </div>
          </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

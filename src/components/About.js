import React,{useContext,useEffect} from 'react';
import img from './man.jpg' 
import Contact from "./Contact";
import AboutApp from "./AboutApp"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const About =() => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 let style ={

  width:"250px",
  height:"250px"
 }



 return (
      <>

<div className={classes.root}>
      <AppBar position="static"  style={{backgroundColor:"yellow"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Contact us " {...a11yProps(1)} />
          <Tab label="About App" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="sectionn">
          <div className="main mainnn">
              <div  className="imgDiv">
                  <img style={style} src={img}></img>
              </div>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Contact></Contact>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <AboutApp></AboutApp>
      </TabPanel>
     
    </div>
     
    
       
   

     </>
  
  )
}

export default About;

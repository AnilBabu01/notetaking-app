import React,{useContext,useEffect} from 'react';
import img from './man.jpg'
const About =() => {

 let style ={

  width:"250px",
  height:"250px"
 }



 return (
      <>
     
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
       
   

     </>
  
  )
}

export default About;

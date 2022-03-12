import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Singup from "./components/Singup";


import { useState } from "react";




function App() {

  
  
  const [alert,setalert]=useState(null);
  
  const showalert =(messsage,type)=>
  {
       setalert({
         mag:messsage,
         type:type
       }) 
       
       setTimeout(() => {
           setalert(null);
       }, 3000);
  }
  return (
    <>

    
    
<BrowserRouter>
     
       
       
        <Navbar />
          
          
        <Alert alert={alert}/>
        <div className="container">
        <NoteState>
        <Routes>
          <Route  showalert={showalert} exact key={About} path="/" element={<Home />} />

          <Route exact  showalert={showalert} key={About} path="/About" element={<About />} />
           
          <Route exact showalert={showalert} key={About} path="/Login" element={<Login/>} />
          <Route exact showalert={showalert} key={About} path="/Singup" element={<Singup/>} />
           </Routes>
           </NoteState>
           </div>
      </BrowserRouter>

     
    </>
  );
}

export default App;

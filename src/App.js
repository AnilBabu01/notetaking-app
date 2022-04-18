import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Singup from "./components/Singup";



import AlertContext from "./context/AlertContext";




function App() {




  return (
    <>

      <BrowserRouter>
        <NoteState>
          <AlertContext>

            <Navbar />


            <Alert alert={alert} />
            <div className="container">

              <Routes>
                <Route exact key={About} path="/" element={<Home />} />

                <Route exact key={About} path="/About" element={<About />} />

                <Route exact key={About} path="/Login" element={<Login />} />
                <Route exact key={About} path="/Singup" element={<Singup />} />
              </Routes>

            </div>
          </AlertContext>
        </NoteState>
      </BrowserRouter>


    </>
  );
}

export default App;

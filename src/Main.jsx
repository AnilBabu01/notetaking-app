import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./context/Alert";
import Login from "./components/Auth/Login";
import Singup from "./components/Auth/Singup";
import Navbar from "./components/Header/Navbar";
import AlertContext from "./context/AlertContext";

function Main() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <AlertContext>
            <Navbar />

            <Alert alert={alert} />
          
              <Routes>
                <Route
                  exact
                  key={About}
                  path="/notetaking-app"
                  element={<Home />}
                />

                <Route exact key={About} path="/About" element={<About />} />

                <Route exact key={About} path="/Login" element={<Login />} />
                <Route exact key={About} path="/Singup" element={<Singup />} />
              </Routes>
          
          </AlertContext>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default Main;





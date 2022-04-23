import React,{useContext} from "react";
import { Link ,useLocation} from "react-router-dom";
import { alertContext } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";


  


const Navbar = () => {

  const redirectlogin = useNavigate();
  const {showAlert}= useContext(alertContext)
  const logout=()=>{
    localStorage.removeItem('token');
    showAlert("success", "You have Logout !");
    redirectlogin("/login")

  }
  let location = useLocation();
 
  return (

    
    <>
    
    

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/no" >
            NoteTake
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link   className={`nav-link ${location.pathname==="/"?"active":""  }`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link ${location.pathname==="/About"?"active":""}`} to="/About">
                  About
                </Link>
              </li>
            </ul>
            
            { !localStorage.getItem('token')? <form className="d-flex">
            <Link className="btn btn-primary mx-3" to="/login" role="button" >login</Link>
             <Link className="btn btn-primary mx-3" to="/singup" role="button" >Signup</Link>
            </form>:<button onClick={logout} className="btn btn-primary"> Logouot</button>}

          </div>
        </div>
      </nav>
       
  

    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { alertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);
  const redirectlogin = useNavigate();
  const { showAlert } = useContext(alertContext);
  const logout = () => {
    localStorage.removeItem("token");
    showAlert("success", "You have Logout !");
    redirectlogin("/login");
  };
  let location = useLocation();

  useEffect(() => {}, [isMobile]);

  return (
    <>
      <nav className={style.navbar}>
        {/* <h3 className={style.logo}><img src={logo} style={{width:"300px",height:"300px"}} alt='logo'></img></h3> */}
        <h3 className={style.logo}>NoteTake</h3>
        <ul
          className={isMobile ? style.mobilelinks : style.navlinks}
          onClick={() => setisMobile(false)}
        >
          <li>
            <Link to="/notetaking-app" className={style.home}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className={style.about}>
              About us
            </Link>
          </li>

          {!localStorage.getItem("token") ? (
            <>
              <li>
                <Link to="/login" className={style.login}>
                  Login
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/singup" className={style.singup}>
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <button 
            style={{ marginRight: "20px" }}
            onClick={logout} className="btn btn-primary">
              {" "}
              Logouot
            </button>
          )}
        </ul>

        <button
          style={{ marginRight: "20px" }}
          onClick={() => setisMobile(!isMobile)}
          className={style.mobileMenuIcon}
        >
          {isMobile ? (
            <i>
              <CloseIcon />
            </i>
          ) : (
            <i>
              <MenuIcon />
            </i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

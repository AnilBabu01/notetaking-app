import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../../context/AlertContext";
import Avatar from "@material-ui/core/Avatar";
import Footer from "../Footer/Footer";
import Grid from '@mui/material/Grid';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import './Singup.css'
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const { showAlert, getsuerInfo } = useContext(alertContext);

  useEffect(() => {
    getsuerInfo();
  }, [localStorage.getItem("token")]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://notetake-app.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      showAlert("success", "you have login successfully!");

      history("/notetaking-app");
    } else {
      showAlert("danger", "Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
       <div style={{ paddingTop: "130px", paddingBottom: "20px", height: "100px" }}>
          < Typography style={{fontWeight:"600"}} align="center" variant="h5"> Thanks for use my Application</ Typography>
        </div>
      <Grid
       
        className="row d-flex justify-content-center align-items-center h-100 mobilenow"
      >
        <Grid
          className="col-12 col-md-8 col-lg-6 col-xl-5 justify-content-center align-items-center"
          style={{ height: "300px", width: "450px" }}
        >
          <Grid
            className="  text-white mainnn"
            style={{ borderRadius: "1rem", marginTop: "-25px",margin: "12px"}}
          >
            <Grid className="card-body p-5 text-center">
              <Grid className="mb-md-5 mt-md-4 pb-5">
                <h2
                  className="fw-bold mb-2 text-uppercase "
                  style={{ marginTop: "-40px" }}
                >
                  Login
                </h2>
                <Grid 
                   className="usename"
                >
                  <Avatar sx={{ width: 80, height: 80 }}>
                    <span style={{ fontSize: "20px" }}>AB</span>{" "}
                  </Avatar>
                </Grid>
                <form onSubmit={handleSubmit}>
                  <Grid className="form-outline form-white mb-4">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={credentials.email}
                      onChange={onChange}
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                  </Grid>

                  <Grid className="form-outline form-white mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                    />
                  </Grid>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </Grid>

              <Grid>
                <p style={{ marginTop: "-40px", }}>
                  Don't have an account?{" "}
                  <Link to="/singup" className="text-white-50 fw-bold">
                    Sign Up
                  </Link>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Login;

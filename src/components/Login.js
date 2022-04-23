import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../context/AlertContext";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const { showAlert, getsuerInfo } = useContext(alertContext);
  
    useEffect(() => {
      getsuerInfo();
    }, [localStorage.getItem("token")])
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://notetake-app.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      showAlert("success", "you have login successfully!");
     
      history("/");
    } else {
     
      showAlert("danger", "Invalid credentials");

    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>


      <div style={{ paddingTop: "50px" }} className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 justify-content-center align-items-center" style={{ height: "300px",width:'450px' }}>
          <div
            className="card  text-white mainnn"
            style={{ borderRadius: "1rem", marginTop: "-25px" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase " style={{ marginTop: "-40px" }}>Login</h2>
                <div style={{marginLeft:"150px"}}>
                <Avatar sx={{width: 80, height: 80}} ><span style={{fontSize:'20px'}}>AB</span> </Avatar>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4">
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
                  </div>

                  <div className="form-outline form-white mb-4">
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
                  </div>




                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </form>

              </div>

              <div>
                <p style={{ marginTop: "-40px" }}>
                  Don't have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Login;

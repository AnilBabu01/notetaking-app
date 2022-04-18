import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../context/AlertContext";
function Singup() {
  const history = useNavigate();
  const {showAlert}= useContext(alertContext)
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("https://notetake-app.herokuapp.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      showAlert("success", "You have singup successfully!");
      history("/login");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mainnn" style={{ borderRadius: "15px",marginTop: "45px"}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5" style={{marginTop: "-25px"}}>
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit} style={{marginTop: "-30px"}}>
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1cg">
                       Enter Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        id="name"
                        aria-describedby="emailHelp"
                        className="form-control"
                      />
                      
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3cg">
                       Enter Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        id="email"
                        aria-describedby="emailHelp"
                        className="form-control"
                      />
                      
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example4cg">
                      Enter Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        id="password"
                        className="form-control"
                      />
                      
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example4cdg">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        name="cpassword"
                        onChange={onChange}
                        id="cpassword"
                        className="form-control"
                      />
                      
                    </div>

                   
                   

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;

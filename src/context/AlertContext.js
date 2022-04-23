/* eslint-disable no-unused-vars */
import { useState, createContext } from "react";
const alertContext = createContext();
const host = "https://notetake-app.herokuapp.com";

export default function AlertContext(props) {

  const [alert, setAlert] = useState(null);
  const [username, setusername] = useState("")
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };


  const [loading, setLoading] = useState(true);
  // get use info 
  const getsuerInfo = async () => {
    //todo api call

    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "get",
      headers: {
        "Content-Type": "application/json",

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzE5ZmU4YTM0ZjhiYWRjNDEwOTc5In0sImlhdCI6MTY1MDIwNDUwMX0.1YUUQiKDMdGWJSNbQti3A_1vrisP1NzQT_vkspT9eYM"

      },

    });
    const json = await response.json()

    console.log(json);


  };
  return (
    <alertContext.Provider value={{ showAlert, alert, loading, setLoading, username, setusername, getsuerInfo }}>
      {props.children}
    </alertContext.Provider>
  );
}

export { alertContext };


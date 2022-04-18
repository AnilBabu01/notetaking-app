/* eslint-disable no-unused-vars */
import { useState, createContext } from "react";
const alertContext = createContext();

export default function AlertContext(props) {
  
  const [alert, setAlert] = useState(null);
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
  return (
    <alertContext.Provider value={{ showAlert, alert, loading, setLoading }}>
      {props.children}
    </alertContext.Provider>
  );
}

export { alertContext };

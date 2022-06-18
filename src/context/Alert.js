import React, { useContext } from "react";
import { alertContext } from "./AlertContext";
export default function Alert() {
  const { alert } = useContext(alertContext);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    alert && (
      <>
        <div className="myToast">
          <div className={`alert alert-${alert.type}`} role="alert">
            <strong> {capitalizeFirstLetter(alert.type)} : </strong>{" "}
            {capitalizeFirstLetter(alert.msg)}
          </div>
        </div>
      </>
    )
  );
}

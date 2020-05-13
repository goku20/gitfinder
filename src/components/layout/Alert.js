import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlerContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={"alert alert-$ {alert.typ}"}>
        <i className=' fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;

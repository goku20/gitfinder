import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={"alert alert-$ {alert.typ}"}>
        <i className=' fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

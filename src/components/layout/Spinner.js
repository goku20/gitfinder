import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

export const Spinner = () => (
  <Fragment>
    <img
      src={Spinner}
      alt='Loading...'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;

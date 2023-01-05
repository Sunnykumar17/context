import React, { useContext } from "react";
import ThemeContext from "../Context";
import Main from "./Main";
import "./context.css";

const Service = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={isLight ? "light" : "dark"}>
      <Main />
      <h2>Services are not available currently.</h2>
    </div>
  );
};

export default Service;
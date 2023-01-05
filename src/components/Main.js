import React, { useContext } from "react";
import ThemeContext from "../Context";
import { Link } from "react-router-dom";

const Main = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <h4>Geekster</h4>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/contact">CONTACTS</Link>
      <br />
      <Link to="/service">SERVICE</Link>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        Toggle  {isLight ? "Dark" : "Light"}
      </button>
    </>
  );
};

export default Main;
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Service from "./components/Service";
import { useState } from "react";
import ThemeContext from "./Context";

function App() {
  const [isLight, setIsLight] = useState(true);

  const changeTheme = () => {
    setIsLight((previousState) => {
      return !previousState;
    });
  };

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isLight, changeTheme }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
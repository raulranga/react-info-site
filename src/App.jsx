import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function handleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

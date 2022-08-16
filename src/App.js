import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Alert from "./Components/Alert";
import Navigation from "./Components/Navigation";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
// import Card from './Card';
// import { Birthday } from './Birthday';
import "./index.css";
// import Tour from './Tour';

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#363636";
      document.body.style.color = "#fff";
      showAlert("Dark mode enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
      showAlert("Light mode enabled!", "success");
    }
  };

  return (
      <Router>
        <Navigation logoText="My App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route exact path="/" element={<TextForm
          headingText="Enter your text"
          showAlert={showAlert}
          mode={mode}
        />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
        
        
        {/* <Card></Card> */}
        {/* <Birthday /> */}
        {/* <Tour /> */}
      </Router>
  );
}

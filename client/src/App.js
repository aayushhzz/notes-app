import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState.js";
import Alert from "./components/Alert.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <NoteState >
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert = {showAlert}/>} />,
            <Route path="/about" element={<About />} />,
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />,
            <Route path="/login" element={<Login showAlert={showAlert} />} />,
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;

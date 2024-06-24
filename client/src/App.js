import './App.css';
import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState.js';
const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/about" element={<About />} />,
];

function App() {
  return (
  <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>{routes}</Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;

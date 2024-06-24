import './App.css';
import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/about" element={<About />} />,
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;

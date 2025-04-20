import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element=<Main /> />
          <Route path="/about" element=<About /> />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

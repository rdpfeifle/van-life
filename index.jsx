import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="logo">
          #VanLife
        </Link>
        <div className="links-container">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/vans" className="nav-link">
            Vans
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

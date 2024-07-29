import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Coffee" element={<CoffeePage />} />
        </Routes>
      </Router>
    </div>
  );
}

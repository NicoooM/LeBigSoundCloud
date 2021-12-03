import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quatrecentquatre from "./pages/Quatrecentquatre";
import Home from "./pages/Home";
import Song from "./pages/Song";
import "./style/common.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:slug" element={<Song />} />
        <Route path="*" element={<Quatrecentquatre />} />
      </Routes>
    </Router>
  );
}

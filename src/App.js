import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quatrecentquatre from "./pages/Quatrecentquatre";
import Home from "./pages/Home";
import Song from "./pages/Song";
import song from "./songs/happy.mp3";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<Song song={song} />} />
        <Route path="*" element={<Quatrecentquatre />} />
      </Routes>
    </Router>
  );
}

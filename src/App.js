import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quatrecentquatre from "./pages/Quatrecentquatre";
import Home from "./pages/Home";
import Song from "./pages/Song";

export default function App() {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s 
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<Song />} />
        <Route path="*" element={<Quatrecentquatre />} />
      </Routes>
    </Router>
  );
}

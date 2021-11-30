import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Song from "./pages/Song";
import song from "./songs/happy.mp3";

export default function App() {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<Song song={song} />} />
        <Route path="*" element={<p>ceci est une 404 sale con</p>} />
      </Routes>
    </Router>
  );
}

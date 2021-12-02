import React from "react";
import { Link } from "react-router-dom";
import { songs } from "../../data.js";
import "./home.scss";

function Home() {
  return (
    <main className="test">
      <header className="container">
        <h1 className="ph-regular">Bonjour.</h1>
        {/* le svg des settings */}
      </header>

      <ul>
        {Object.values(songs).map((song) => (
          <div>
            <Link
              to={{
                pathname: `/song/${song.slug}`,
              }}
            >
              {song.title}
            </Link>
          </div>
        ))}
      </ul>
    </main>
  );
}

export default Home;

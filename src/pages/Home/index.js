import React from "react";
import { Link } from "react-router-dom";
import { songs } from "../../data.js";

function Home() {
  return (
    <div>
      <ul>
        {Object.values(songs).map((song) => (
          <li>
            <Link
              to={{
                pathname: `/song/${song.slug}`,
              }}
            >
              {song.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

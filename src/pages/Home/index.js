import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/song">Song</Link>
        </li>
        <li>
          <Link to="/qzdqdz">Broken Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

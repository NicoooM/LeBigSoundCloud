import { tLyrics } from "./happy.js";
import Timer from "./components/timer";
import { useState, useEffect } from "react";

function App() {
  const min = tLyrics[0][0].substring(1, 3);
  const sec = tLyrics[0][0].substring(4, 6);
  const msec = tLyrics[0][0].substring(7, 9);
  const text = tLyrics[0][1];

  const [lyrics, setLyrics] = useState(tLyrics[0][1]);
  // const []

  return (
    <div className="App">
      <Timer></Timer>
      <ul>
        {tLyrics.map((line, index) => {
          return <li key={index}>{line[0] + " " + line[1]}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

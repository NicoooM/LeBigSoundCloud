import { tLyrics } from "./happy.js";
import Timer from "./components/timer";
import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [parole, setParole] = useState("");

  return (
    <div className="App">
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        isOn={isOn}
        setIsOn={setIsOn}
        tLyrics={tLyrics}
        setParole={setParole}
      ></Timer>
      <p>{parole}</p>
    </div>
  );
}

// <ul>
// {tLyrics.map((line, index) => {
//   let min = parseInt(line[0].substring(1, 3));
//   let sec = parseFloat(line[0].substring(4, 9));
//   sec = sec + 60 * min;
//   let text = line[1];
//   if (sec < seconds) {
//     return <li>{text}</li>;
//   }
// })}
// </ul>

export default App;

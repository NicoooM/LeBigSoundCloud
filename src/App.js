import { tLyrics } from "./happy.js";
import Timer from "./components/timer";

function App() {
  const min = tLyrics[0][0].substring(1, 3);
  const sec = tLyrics[0][0].substring(4, 6);
  const msec = tLyrics[0][0].substring(7, 9);
  const text = tLyrics[0][1];
  console.log(min);
  console.log(sec);
  console.log(msec);
  console.log(text);

  return (
    <div className="App">
      <Timer></Timer>
    </div>
  );
}

export default App;

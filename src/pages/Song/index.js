import { tLyrics } from "../../happy.js";
import Timer from "../../components/Timer";
import Player from "../../components/AudioPlayer";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Song({ song }) {
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
      {/* <Player
        url={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}
      /> */}
      <ReactAudioPlayer src={song} controls onPlay={() => setIsOn(true)} />
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

export default Song;

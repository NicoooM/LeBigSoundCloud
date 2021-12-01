// import { lyrics } from "../../happy";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Player({ title, artist, lyrics, song }) {
  const [parole, setParole] = useState("");
  const [lyricIndex, setLyricIndex] = useState(0);
  const [timeCode, setTimeCode] = useState(
    parseFloat(lyrics[0][0].substring(4, 9))
  );
  const [newParoles, setNewParoles] = useState(lyrics[0][1]);

  function onListen(sec) {
    if (timeCode <= sec) {
      // si le temps du de la parole est inférieur ou égal au temps du timer
      // afficher les nouvelles paroles
      setParole(newParoles);
      // change le timeCode par celui des prochaines paroles
      setTimeCode(
        parseFloat(lyrics[lyricIndex + 1][0].substring(4, 9)) +
          60 * parseInt(lyrics[lyricIndex + 1][0].substring(1, 3))
      );
      // prend les paroles d'après
      setNewParoles(lyrics[lyricIndex + 1][1]);
      // ajoute 1 à index afin de traverser la nouvelle ligne du tableau la prochaine fois
      setLyricIndex(lyricIndex + 1);
    }
  }

  return (
    <div>
      <div>
        <Link to="/">Homepage</Link>
        <div>
          <div>
            <p>{title}</p>
            <p>{artist}</p>
          </div>
          <img alt="img" />
        </div>
      </div>
      <div>
        <p>{parole}</p>
        <p>{newParoles}</p>
        <ReactAudioPlayer
          listenInterval={100}
          src={song}
          controls
          onListen={(sec) => {
            onListen(sec);
          }}
          onSeeked={(event) => {
            const data = new Date(event.timeStamp);
            console.log(data);
            onListen(event.timeStamp);
          }}
        />
      </div>
    </div>
  );
}

export default Player;

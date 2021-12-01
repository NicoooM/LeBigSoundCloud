// import { lyrics } from "../../happy";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Player.module.scss";

function Player({ title, artist, lyrics, song, cover }) {
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
      <div className={styles.header}>
        <Link to="/" className={styles.back}>
          <svg
            width="12"
            height="18"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="#CBCBCB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className={styles.header_right}>
          <div>
            <h2>{title}</h2>
            <p>{artist}</p>
          </div>
          <img alt="img" src={cover} className={styles.cover} />
        </div>
      </div>
      <div className={styles.lyrics}>
        <p className={styles.current_lyric}>{parole}</p>
        <p className={styles.next_lyric}>{newParoles}</p>
      </div>
      <ReactAudioPlayer
        className={styles.player}
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
  );
}

export default Player;

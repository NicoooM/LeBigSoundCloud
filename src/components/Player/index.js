// import { lyrics } from "../../happy";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Player.module.scss";

function Player({ title, artist, lyrics, song, cover }) {
  const [parole, setParole] = useState("");
  const [lyricIndex, setLyricIndex] = useState(0);
  const [timeCode, setTimeCode] = useState(
    parseFloat(lyrics[0][0].substring(4, 9))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
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
      <div className={styles.player}>
        <progress min="0" max="100" value={percentage} />
        <div className={styles.time}>
          {/* <p></p> */}
          <p>{`${Math.round(duration / 60)}:${
            Math.round(duration % 60).toString().length === 1
              ? `0${Math.round(duration % 60)}`
              : Math.round(duration % 60)
          }`}</p>
        </div>
        <button
          onClick={() => {
            let player = document.getElementById("player");
            isPlaying !== true ? player.play() : player.pause();
            setIsPlaying(!isPlaying);
          }}
          className={styles.play_button}
        >
          {isPlaying ? (
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="22" rx="2.5" fill="#CBCBCB" />
              <rect x="15" width="5" height="22" rx="2.5" fill="#CBCBCB" />
            </svg>
          ) : (
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.90193C21.5 10.0566 21.5 12.9434 19.5 14.0981L5.25 22.3253C3.25 23.48 0.749999 22.0366 0.749999 19.7272V3.27276C0.749999 0.963355 3.25 -0.480018 5.25 0.674682L19.5 8.90193Z"
                fill="#CBCBCB"
              />
            </svg>
          )}
        </button>

        {/* <p>{`${Math.floor(currentTime / 60)}:${
          Math.floor(currentTime) >= 60
            ? Math.floor(currentTime - 60 * (currentTime % 60))
            : Math.floor(currentTime)
        }`}</p> */}
      </div>
      <ReactAudioPlayer
        id="player"
        listenInterval={100}
        src={song}
        onLoadedMetadata={(e) => {
          let player = document.getElementById("player");
          setDuration(player.duration);
        }}
        onListen={(sec) => {
          setCurrentTime(Math.round(sec));
          setPercentage((sec * 100) / duration);
          onListen(sec);
          console.log(currentTime);
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

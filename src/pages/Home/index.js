import React, { useState } from "react";
import { Link } from "react-router-dom";
import { songs } from "../../data.js";
import styles from "./home.module.scss";

function Home() {
  const [helpOpen, setHelpOpen] = useState(false); //utilisation du hook useStates de react afin d'avoir l'état de la popup
  return (
    <main>
      <header className={styles.header}>
        <h1 className={styles.ph_regular}>Bonjour.</h1>
        <div onClick={() => setHelpOpen(true)} className={styles.qm_container}>
          {/* utilisation du onClick de react afin de savoir quand l'utilisateur click sur le ? */}
          <p className={styles.ph_thin}>?</p>
        </div>
      </header>
      {/* début popup */}
      {/* si helpOpen = true alors on suit les premières parentheses */}
      {helpOpen ? (
        <div className={styles.pop_up}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.cross}
            onClick={() => setHelpOpen(false)}
          >
            <path
              d="M2 2L12 12M2 12L12 2"
              stroke="#CBCBCB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className={styles.text_pop_up}>
            Sélectionnez une chanson pour la lire et afficher les paroles. Les
            paroles défilent au moment ou il faut chanter, en laissant une
            phrase d’avance pour se préparer.
          </p>
        </div>
      ) : (
        //sinon, on suit et rien ne se passe car les deuxièmes parentheses sont vides
        ""
      )}
      {/* fin popup */}

      <ul>
        {Object.values(songs).map((song) => (
          <Link
            to={{
              pathname: `/song/${song.slug}`,
            }}
            style={{ backgroundImage: `url(${song.cover})` }}
            className={styles.song_container}
          >
            <div className={styles.gradient}></div>
            <div className={styles.song_info_container}>
              <h2 className={styles.song_title}>{song.title}</h2>
              <p className={styles.song_artist}>{song.artist}</p>
            </div>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Home;

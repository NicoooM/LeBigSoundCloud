import { useState, useEffect, useCallback } from "react";

export default function Timer({
  seconds,
  setSeconds,
  isOn,
  setIsOn,
  tLyrics,
  setParole,
}) {
  const [lyricIndex, setLyricIndex] = useState(0);
  const [timeCode, setTimeCode] = useState(
    parseFloat(tLyrics[0][0].substring(4, 9))
  );
  const [newParoles, setNewParoles] = useState(tLyrics[0][1]);

  useEffect(() => {
    if (isOn) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
        if (timeCode <= seconds) {
          // si le temps du de la parole est inférieur ou égal au temps du timer
          // afficher les nouvelles paroles
          setParole(newParoles);
          // change le timeCode par celui des prochaines paroles
          setTimeCode(
            parseFloat(tLyrics[lyricIndex + 1][0].substring(4, 9)) +
              60 * parseInt(tLyrics[lyricIndex + 1][0].substring(1, 3))
          );
          // prend les paroles d'après
          setNewParoles(tLyrics[lyricIndex + 1][1]);
          // ajoute 1 à index afin de traverser la nouvelle ligne du tableau la prochaine fois
          setLyricIndex(lyricIndex + 1);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isOn, seconds, lyricIndex, newParoles, timeCode]);

  const onReset = useCallback(() => {
    setSeconds(0);
    setTimeCode(parseFloat(tLyrics[0][0].substring(4, 9)));
    setLyricIndex(0);
    setParole("");
    setNewParoles(tLyrics[0][1]);
    setIsOn(false);
  }, [tLyrics, setIsOn, setParole, setSeconds]);

  return (
    <div>
      <h1>{seconds.toFixed(2)}</h1>
      <button id="btn" onClick={() => setIsOn(!isOn)}>
        {isOn ? "Pause" : "Démarrer"}
      </button>
      <button onClick={onReset}>Mettre à 0</button>
    </div>
  );
}

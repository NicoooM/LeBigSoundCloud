import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.01);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isOn]);

  const onReset = () => {
    setSeconds(0);
    setIsOn(false);
  };

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

import { Link } from "react-router-dom";
import "./quatrecentquatre.scss";

function quatrecentquatre() {
  return (
    <main>
      <header className="container">
        <h1 className="ph-regular">Dang.</h1>
        <div className="line"></div>
      </header>

      <div className="center-container">
        <p className="big-text">404.</p>
        <div className="even-center-container">
          <p className="small-text">404.</p>
        </div>
      </div>

      <footer className="container">
        <div className="line"></div>
        <Link to="/" className="ph-regular">
          Accueil.
        </Link>
      </footer>
    </main>
  );
}

export default quatrecentquatre;

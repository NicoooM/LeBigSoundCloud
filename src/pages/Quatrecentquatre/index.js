import { Link } from "react-router-dom";
import styles from "./quatrecentquatre.module.scss";

function quatrecentquatre() {
  return (
    <main>
      <header className={styles.container}>
        <h1 className={styles.ph_regular}>Dang.</h1>
        <div className={styles.line}></div>
      </header>

      <div className={styles.center_container}>
        <p className={styles.big_text}>404.</p>
        <div className={styles.even_center_container}>
          <p className={styles.small_text}>404.</p>
        </div>
      </div>

      <footer className={styles.container}>
        <div className={styles.line}></div>
        <Link to="/" className={styles.ph_regular}>
          Accueil.
        </Link>
      </footer>
    </main>
  );
}

export default quatrecentquatre;

import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export function Header() {
  return (
    <div className="section">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.lines}>
            <hr className={styles["header-line"]} />
            <hr className={styles["header-line"]} />
          </div>
          <Link to="/">
            <div className={styles["header-logo"]}>
              <img className={styles["header-image"]} src="/img/logo.svg" alt="" />
            </div>
          </Link>
          <div className={styles["header-logo2"]}>
            <div className={styles["header-cercle"]}></div>
          </div>
          <div className={styles["header-button"]}>
            <p className={styles["header-button-text"]}>ЗАБРОНИРОВАТЬ</p>
            <img className={styles["header-arrow"]} src="/img/Arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
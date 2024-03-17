import {DateCount} from "./DateCount";
import styles from "./SearchingTours.module.css"
export function SearchingTours() {
  return (
    <div>
      <div className="section">
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles["main-text"]}>
              <p className={styles["main-text-head"]}>Комфортный отдых в Крыму</p>
            </div>
            <DateCount />
          </div>
        </div>
      </div>
    </div>
  );
}


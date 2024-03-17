import styles from "./ActiveButton.module.css";

export function ActiveButton() {
  return (
    <div>
      <div className={styles["active-weekend__buttons-item"]}>
        <span>Морские прогулки</span>
      </div>
    </div>
  );
}

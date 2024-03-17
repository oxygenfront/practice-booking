// import React from 'react'
import styles from "./Option.module.css";
export function Option() {
  return (
    <div>
      <div className={styles["options-disc"]}>
        <div>
          <span className={styles["options-about__number"]}>01</span>
          <span className={styles["options-about__name"]}>паста бар</span>
        </div>
        <button className={styles["options-about__btn"]}>подробнее</button>
      </div>
    </div>
  );
}


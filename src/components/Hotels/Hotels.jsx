// import React from 'react'
import {Card} from "./Card.jsx";
import styles from "./Hotels.module.css";
export function Hotels() {
  return (
    <section className={styles.hotels}>
      <div className={styles["hotels-change"]}>
        <img
          src="/img/cerkles1.svg"
          alt=""
          className={styles["hotels-image1"]}
        />
        <div className={styles["hotel-head"]}>
          <h1 className={styles["hotels-text"]}>Номера</h1>
          <h2 className={styles["hotels-desc"]}>Выбери свой номер</h2>
        </div>
        <img
          src="/img/cerkles2.svg"
          alt=""
          className={styles["hotels-image2"]}
        />
      </div>
      <div className={styles["hotels-cards"]}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}


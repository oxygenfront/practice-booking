// import React from 'react'
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export function Card() {
  return (
    <div>
      <div className={styles["hotels-card"]}>
        <img
          src="/img/luks.jpg"
          alt=""
          className={styles["hotels-card__img"]}
        />
        <div className={styles["hotels-desc1"]}>
          <span className={styles["hotels-card__text"]}>Люкс</span>
          <div className={styles["hotels-card__under"]}>
            <div className={styles["hotels-card__line2"]}></div>
            <span className={styles["hotels-card__text2"]}>S-40 кв.м.</span>
            <div className={styles["hotels-card__line2"]}></div>
            <img
              src="/img/peopleblue.svg"
              alt=""
              className={styles["hotels-card__image1"]}
            />
            <span className={styles["hotels-card__text2"]}>4</span>
            <div className={styles["hotels-card__line2"]}></div>
            <span className={styles["hotels-card__text2"]}>Море</span>
          </div>
        </div>
        <div className={styles["hotels-buttons"]}>
          <Link to="/hotels">
            <button className={styles["hotels-card__btn"]}>
              забронировать
            </button>
          </Link>
          <Link to="/description">
            <button className={styles["hotels-card__btn1"]}>подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


// import React from 'react';
import styles from "./Video.module.css";
export function VideoView() {
  return (
    <div>
      <section className={styles.video}>
        <div className={styles["video-head"]}>
          <img src="/img/videohead1.svg" alt="" className="video-image1" />
          <h1 className={styles["video-text"]}>
            посмотрите Обзорное видео <br />о нашем отеле
          </h1>
          <img src="/img/videohead2.svg" alt="" className="video-image2" />
        </div>
        <iframe
          className={styles["video-apples"]}
          width="1680"
          height="700"
          src="https://www.youtube.com/embed/QyveQtAR-k8"
          title="100 СГНИВШИХ, КИСЛЫХ ЯБЛОК!(мем)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className={styles["video-under"]}></div>
      </section>
    </div>
  );
}
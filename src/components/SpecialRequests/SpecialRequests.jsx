// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./SpecialRequests.module.css"
import { Request } from './Request';
export function SpecialRequests() {
  return (
    <div>
      <div className={styles.sales}>
        <div className={styles["sales-head"]}>
          <img src="/img/pred1.svg" alt="" className="sales-image"></img>
          <div className={styles["sales-texts"]}>
            <h1 className={styles["sales-text"]}>
              наши <br /> спецпредложения
            </h1>
          </div>
          <img src="/img/pred2.svg" alt="" className="sales-image1"></img>
        </div>
        <div className={styles["sales-content"]}>
          <Request />
          <Request />
          <Request />
          <div className={styles["sales-main__look"]}>
            <Link to="/sales">
              <button className={styles["sales-main__lookall"]}>Смотреть все</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


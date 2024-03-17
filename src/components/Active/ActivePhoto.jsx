import styles from './ActivePhoto.module.css';

export const ActivePhoto = () => {
	return (
		<>
			<div>
				<div className={styles['active-weekend__items_top']}>
					<div
						className={`${styles['active-weekend__items_top-item']} ${styles['btrr']}`}
					>
						<div className={styles['active-weekend__items_item_bottom-button']}>
							<span>Виндсерфинг</span>
							<button></button>
						</div>
					</div>
					<div
						className={`${styles['active-weekend__items_top-item']} ${styles['btlr']}`}
					>
						<div className={styles['active-weekend__items_item_bottom-button']}>
							<span>Кайтсерфинг</span>
							<button></button>
						</div>
					</div>
				</div>
      </div>
      <div>
      <div className={styles["active-weekend__items_bottom"]}>
        <div className={styles["active-weekend__items_bottom-item"]}>
          <div className={styles["active-weekend__items_item_bottom-button"]}>
            <span>Эндуро-тур</span>
            <button></button>
          </div>
        </div>
        <div className={styles["active-weekend__items_bottom-item"]}>
          <div className={styles["active-weekend__items_item_bottom-button"]}>
            <span>Сафари на джипах</span>
            <button></button>
          </div>
        </div>
      </div>
    </div>
		</>
	);
};

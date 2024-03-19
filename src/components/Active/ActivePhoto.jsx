import styles from './ActivePhoto.module.css'

export const ActivePhoto = () => {
	return (
		<>
			<div className={styles['active-weekend__items_top']}>
				<div className={`${styles['active-weekend__items_top-item']} ${styles['btrr']}`} />
				<div className={styles['active-weekend__items_item_bottom-button']}>
					<span>Виндсерфинг</span>
					<button type='button'/>
				</div>
			</div>
			<div className={`${styles['active-weekend__items_top-item']} ${styles['btlr']}`}>
				<div className={styles['active-weekend__items_item_bottom-button']}>
					<span>Кайтсерфинг</span>
					<button type='button'/>
				</div>
			</div>

			<div className={styles['active-weekend__items_bottom']}>
				<div className={styles['active-weekend__items_bottom-item']}>
					<div className={styles['active-weekend__items_item_bottom-button']}>
						<span>Эндуро-тур</span>
						<button type='button'/>
					</div>
				</div>
				<div className={styles['active-weekend__items_bottom-item']}>
					<div className={styles['active-weekend__items_item_bottom-button']}>
						<span>Сафари на джипах</span>
						<button type='button'/>
					</div>
				</div>
			</div>
		</>
	)
}

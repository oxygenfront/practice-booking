import styles from './ActivePhoto.module.css';

import { ActivePhoto as ActivePhotoComp } from './shared/active-photo';

export const ActivePhoto = () => {
	return (
		<>
			<div className={styles['active-weekend__items_top']}>
				<div className={styles['active-weekend__items_top-item']}>
					<div
						className={`${styles['active-weekend__items_top-item']} ${styles['btrr']}`}
					>
						<ActivePhotoComp title='Виндсерфинг' />
					</div>
				</div>
				<div
					className={`${styles['active-weekend__items_top-item']} ${styles['btlr']}`}
				>
					<ActivePhotoComp title='Кайтсерфинг' />
				</div>
			</div>

			<div className={styles['active-weekend__items_bottom']}>
				<div className={styles['active-weekend__items_bottom-item']}>
					<ActivePhotoComp title='Эндуро-тур' />
				</div>
				<div className={styles['active-weekend__items_bottom-item']}>
					<ActivePhotoComp title='Сафари на джипе' />
				</div>
			</div>
		</>
	);
};

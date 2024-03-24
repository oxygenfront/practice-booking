import { useLocation } from 'react-router-dom'
import styles from './ActivePhoto.module.css'
export const ActivePhoto = () => {
	const { pathname } = useLocation()
	return (
		<>
			<div className={styles['active-weekend__items_top']}>
				<div className={styles['active-weekend__items_top-item']}>
					<div className={`${styles['active-weekend__items_top-item']} ${styles['btrr']}`}>
						{pathname !== '/gallery' && (
							<div className={styles['active-weekend__items_item_bottom-button']}>
								<span>Виндсерфинг</span>
								<button type='button' />      
							</div>
						)}
					</div>
				</div>
				<div className={`${styles['active-weekend__items_top-item']} ${styles['btlr']}`}>
					{pathname !== '/gallery' && (
						<div className={styles['active-weekend__items_item_bottom-button']}>
							<span>Кайтсерфинг</span>
							<button type='button' />
						</div>
					)}
				</div>
			</div>

			<div className={styles['active-weekend__items_bottom']}>
				<div className={styles['active-weekend__items_bottom-item']}>
					{pathname !== '/gallery' && (
						<div className={styles['active-weekend__items_item_bottom-button']}>
							<span>Эндуро-тур</span>
							<button type='button' />
						</div>
					)}
				</div>
				<div className={styles['active-weekend__items_bottom-item']}>
					{pathname !== '/gallery' && (
						<div className={styles['active-weekend__items_item_bottom-button']}>
							<span>Сафари на джипах</span>
							<button type='button' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

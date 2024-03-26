import { Link } from 'react-router-dom'
import styles from './Card.module.css'
export function Card() {
	return (
		// FIXME don't use div a root element, instead of this use a <></> or React.Fragment
		<div>
			<div className={styles['hotels-card']}>
				<img
					src='/img/luks.jpg'
					alt=''
					className={styles['hotels-card__img']}
				/>
				<div className={styles['hotels-desc1']}>
					<span className={styles['hotels-card__text']}>Люкс</span>
					<div className={styles['hotels-card__under']}>
						<div className={styles['hotels-card__line2']} />
						<span className={styles['hotels-card__text2']}>S-40 кв.м.</span>
						<div className={styles['hotels-card__line2']} />
						<img
							src='/img/peopleblue.svg'
							alt=''
							className={styles['hotels-card__image1']}
						/>
						<span className={styles['hotels-card__text2']}>4</span>
						<div className={styles['hotels-card__line2']} />
						<span className={styles['hotels-card__text2']}>Море</span>
					</div>
				</div>
				<div className={styles['hotels-buttons']}>
					<Link to='/hotels'>
						<button type='button' className={styles['hotels-card__btn']}>
							забронировать
						</button>
					</Link>
					<Link to='/description'>
						<button type='button' className={styles['hotels-card__btn1']}>
							подробнее
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

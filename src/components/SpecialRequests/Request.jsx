import { Link } from 'react-router-dom'
import styles from './Request.module.css'
export function Request() {
	return (
		<div>
			<div className={styles['sales-main']}>
				<img src='/img/arendanomera.jpg' alt='' className={styles['sales-main-image']} />
				<div className={styles['sales-main-info']}>
					<p className={styles['sales-main__date']}>12/06.22</p>
					<h1 className={styles['sales-main__text']}>скидка на проживание 10% от 5 суток</h1>
					<p className={styles['sales-main__description']}>
						Аренда номера Делюкс на 4 человек с видом на море и собвенной терассой. Коктейли в подарок
						единоразово при размещении.
					</p>
					<Link to='/sales'>
						<button type='button' className={styles['sales-main__btn']}>
							подробнее
						</button>
					</Link>
				</div>
			</div>
			<div className={styles['sales-main__under']} />
		</div>
	)
}

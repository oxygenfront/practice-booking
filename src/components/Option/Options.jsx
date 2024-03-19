import { Option } from './Option'
import styles from './Options.module.css'
export function Options() {
	return (
		<div>
			<section className={styles.options}>
				<h1 className={styles['options-text']}>вам понравится у нас</h1>
				<div className={styles['options-main']}>
					<div className={styles['options-about']}>
						<div>
							<Option />
							<Option />
							<Option />
							<Option />
						</div>
						<div className={styles['options-slider']}>
							<button type='button' className={styles['options-slider__btn']}>
								<img src='/img/Arrow 7.svg' alt='' className='options-slider__image' />
							</button>
							<span className={styles['options-slider__numbers']}>01/06</span>
							<button type='button' className={styles['options-slider__btn']}>
								<img src='/img/Arrow 6.svg' alt='' className='options-slider__image' />
							</button>
						</div>
					</div>
					<div className='options-image'>
						<img src='/img/cocktail.jpg' alt='' className='options-image__coctaile' />
					</div>
				</div>
			</section>
		</div>
	)
}

import { DateCount } from './DateCount'
import styles from './SearchingTours.module.css'
export function SearchingTours() {
	return (
		// FIXME don't use div a root element, instead of this use a <></> or React.Fragment
		<div>
			<div className='section'>
				<div className={styles.main}>
					<div className={styles['main-text']}>
						<p className={styles['main-text-head']}>Комфортный отдых в Крыму</p>
					</div>
					<DateCount />
				</div>
			</div>
		</div>
	);
}

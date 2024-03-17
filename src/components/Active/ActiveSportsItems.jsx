import { Link, useLocation } from 'react-router-dom';
import { ActiveButton } from './ActiveButton';
import { ActivePhoto } from './ActivePhoto';
import styles from './ActiveSportsItem.module.css';
export function ActiveSportsItems() {
	const { pathname } = useLocation();
	return (
		<div className={styles.container}>
			<section className={styles['active-weekend']}>
				<div className={styles['container active-weekend__container']}>
					<h1 className={styles['active-weekend__title']}>
						Активный отдых в отеле <br />
						санторини
					</h1>
					<div className={styles['active-weekend__buttons-wrapper']}>
						<div className={styles['active-weekend__buttons']}>
							{pathname !== '/active' && (
								<>
									<ActiveButton />
									<ActiveButton />
									<ActiveButton />
								</>
							)}
						</div>
					</div>
					<div className={styles['active-weekend__items']}>
						{pathname === '/active' ? (
							<>
								<ActivePhoto />
								<ActivePhoto />
							</>
						) : (
							<>
								<ActivePhoto />
							</>
						)}
					</div>
				</div>
				<div className={styles['sales-main__look']}>
					<Link to='/active'>
						<button className={styles['sales-main__lookall']}>
							Смотреть все
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

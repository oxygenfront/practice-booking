import { useLocation } from 'react-router-dom';
import styles from '../ActivePhoto.module.css';

export const ActivePhoto = ({ title }) => {
	const { pathname } = useLocation();

	return (
		pathname !== '/gallery' && (
			<div className={styles['active-weekend__items_item_bottom-button']}>
				<span>{title}</span>
				<button type='button' />
			</div>
		)
	);
};

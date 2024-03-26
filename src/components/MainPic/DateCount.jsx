import { useState } from 'react'
import Calendar from 'react-calendar'
import styles from './DateCount.module.css'
export function DateCount() {
	const [isOpen, setIsOpen] = useState(false)
	const [count, setCount] = useState(0)

	const handelOutsideClick = () => {
		setIsOpen(!isOpen)
	}
	const onClickCount = (operator) => {
		if (operator === '+') {
			setCount(count + 1)
		} else if (operator === '-') {
			setCount(count - 1)
		}
	}
	return (
		// FIXME don't use div a root element, instead of this use a <></> or React.Fragment
		<div>
			<div className={styles['main-date']}>
				<img src='../img/calendar.svg' alt='' className='calendar' />
				<p className={styles['main-date-text']}>дата заезда - дата выезда</p>
				<button
					type='button'
					onClick={handelOutsideClick}
					className='main-date-btn1'
				>
					<img src='../img/chevron.svg' alt='' className='chevron' />
				</button>
				<div className={styles.line} />
				<button type='button' className={styles['main-date-btn']}>
					<img src='../img/people.svg' alt='' className='people' />
				</button>
				<p className={styles['main-date-text']}>кол-во человек</p>
				<button
					type='button'
					onClick={() => onClickCount('+')}
					className={styles['main-date-btn2']}
				>
					<img src='../img/plus.svg' alt='' className='plus' />
				</button>
				<p className={styles['main-date-counter']}>{count}</p>
				<button
					type='button'
					disabled={count === 0}
					onClick={() => onClickCount('-')}
					className={styles['main-date-btn3']}
				>
					<img src='../img/minus.svg' alt='' className='minus' />
				</button>
				<div className={styles.line1} />
				<button type='button' className={styles['main-date-btn4']}>
					<img src='../img/search.svg' alt='' className='search' />
				</button>
			</div>
			{isOpen && <Calendar className={styles.calendar3} />}
		</div>
	);
}

import styles from './BookingForma.module.css'
export function BookingForma() {
	return (
		<div>
			<div>
				<div className={styles['booking-forma']}>
					<div className={styles['booking-forma_input']}>
						<img src='/img/chel.svg' alt='' className={styles['booking-name']} />
						<input type='text' placeholder='Ваше имя' />
					</div>
					<div className={styles['booking-forma_buttons']}>
						<button type='button' className={styles['booking-forma_buttons-item']}>
							<img src='/img/calendar.svg' alt='' className={styles['booking-cal']} />
							<span className={styles['booking-forma_buttons__text']}>Дата заезда</span>
						</button>
						<button type='button' className={styles['booking-forma_buttons-item']}>
							<img src='/img/calendar.svg' alt='' className={styles['booking-cal']} />
							<span className={styles['booking-forma_buttons__text']}>Дата выезда</span>
						</button>
						<button type='button' className={styles['booking-forma_buttons-item']}>
							<img src='/img/people.svg' alt='' className='booking-cal' />
							<span>Взрослые</span>
							<img src='/img/chevron.svg' alt='' className='booking-arrow' />
						</button>
						<button type='button' className={styles['booking-forma_buttons-item']}>
							<img src='/img/people.svg' alt='' className={styles['booking-cal']} />
							<span>Дети до 12 лет</span>
							<img src='/img/chevron.svg' alt='' className='booking-arrow' />
						</button>
					</div>
					<div className={styles['booking-forma_input']}>
						<img src='/img/telephone.svg' alt='' className={styles['booking-name']} />
						<input type='text' placeholder='Ваш номер телефона' />
					</div>
					<button type='button' className={styles['booking-forma_buttons-booking']}>
						Забронировать
					</button>

					<div>
						<input id='1' type='checkbox' className={styles['booking-forma_input_checkbox']} />
						<label>Нажимая на кнопку, вы автоматически соглашаетесь с Политикой конфиденциальности</label>
					</div>
				</div>
			</div>
		</div>
	)
}

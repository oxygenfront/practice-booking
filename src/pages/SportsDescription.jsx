import { BookingForma, Circle, CircleUnderText, SearchingTours } from '../components/index.js'
export function SportsDescription() {
	return (
		<>
			<SearchingTours />
			<section className='section'>
				<div className='main-white'>
					<div className='main-white__text'>Виндсерфинг</div>
				</div>
			</section>
			<section className='about'>
				<div className='about-text'>
					<p className='about-text__main'>
						Мы обоснованно гордимся отличной материально-технической базой и можем предложить своим гостям
						доски лучших мировых брендов: F2, Tabou, Unifiber, Gaastra, Big, Starboard, широкие борды
						большого литража со швертами для обучения с нуля, а также доски для продвинутых райдеров, паруса
						диапазоном от 1,5 до 7,5 м, прогулочные каяки с посадкой seatUp, прокат оборудования.
					</p>
				</div>
				<div className='about-back' />
			</section>
			<div className='options'>
				<div className='options-header'>
					<h1 className='options-header__text'>Заголовок раздела статьи (H2)</h1>
				</div>
				<div className='options-main'>
					<div className='options-image'>
						<img src='/img/serf.jpg' alt='' />
					</div>
					<div className='options-about'>
						<div className='options-about__header'>
							<span className='options-about__text'>Какое то описание заголовка</span>
						</div>
						<div className='options-about__desc'>
							<p className='options-about__p'>
								для продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, прогулочные каяки с
								посадкой seatUp, прокат оборудования.
							</p>
						</div>
						<div className='options-about__header'>
							<span className='options-about__text'>Какое то описание заголовка</span>
						</div>
						<div className='options-about__desc'>
							<p className='options-about__p'>
								для продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, прогулочные каяки с
								посадкой seatUp, прокат оборудования.
							</p>
						</div>
						<div className='options-about__header'>
							<span className='options-about__text'>Какое то описание заголовка</span>
						</div>
						<div className='options-about__desc'>
							<p className='options-about__p'>
								для продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, прогулочные каяки с
								посадкой seatUp, прокат оборудования.
							</p>
						</div>
						<div className='options-about__header'>
							<span className='options-about__text'>Какое то описание заголовка</span>
						</div>
						<div className='options-about__desc'>
							<p className='options-about__p'>
								для продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, прогулочные каяки с
								посадкой seatUp, прокат оборудования.
							</p>
						</div>
					</div>
				</div>
			</div>
			<section className='include'>
				<div className='include-header'>
					<div className='include-header__text'>Что входит</div>
				</div>
				<div className='include-cercles'>
					<Circle />
					<CircleUnderText />
					<Circle />
					<CircleUnderText />
				</div>
				<div className='include-sqear'>
					<div className='include-sqear__back' />
					<div className='include-sqear__back' />
					<div className='include-sqear__back' />
				</div>
			</section>
			<BookingForma />
		</>
	)
}

import { BookingForma, SearchingTours } from '../../components/index.js';
// import styles from "./SalesPage.module.css"
export function SalesPage() {
	return (
		<>
			<SearchingTours />
			<div className='section'>
				<div className='main__container'>
					<div className='main-white'>
						<div className='main-white__text'>скидка на проживание 10% </div>
						от 5 суток
					</div>
				</div>
			</div>
			<section className='about'>
				<div className='about-cont'>
					<div className='about-main'>
						<div className='about-header'>
							Предложение действительно до 20 июля 2022 г.
						</div>
						{/* FIXME this div is useless for now, remove it and there needed to be a p tag */}
						<div className='about-paragraph'>
							Мы обоснованно гордимся отличной материально-технической базой и
							можем предложить своим гостям доски лучших мировых брендов: F2,
							Tabou, Unifiber, Gaastra, Big, Starboard, широкие борды большого
							литража со швертами для обучения с нуля, а также доски для
							продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м,
							прогулочные каяки с посадкой seatUp, прокат оборудования. Мы
							обоснованно гордимся отличной материально-технической базой и
							можем предложить своим гостям доски лучших мировых брендов: F2,
							Tabou, Unifiber, Gaastra, Big, Starboard, широкие борды большого
							литража со швертами для обучения с нуля, а также доски для
							продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м,
							прогулочные каяки с посадкой seatUp, прокат оборудования.
						</div>
						{/* FIXME there needed to be a span tag */}
						<div className='about-header1'>Условия участия</div>
						{/* FIXME there needed to be a p tag and writing must readable classname and style. If styles to about-paragraph1 === styles about-paragraph, concat styles to about-paragraph   */}
						<div className='about-paragraph1'>
							Мы обоснованно гордимся отличной материально-технической базой и
							можем предложить своим гостям доски лучших мировых брендов: F2,
							Tabou, Unifiber, Gaastra, Big, Starboard, широкие борды большого
							литража со швертами для обучения с нуля, а также доски для
							продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, ат
							оборудования.
						</div>
					</div>
					{/* FIXME fix uncorrected naming files and uncorrected spelling */}
					<BookingForma />
				</div>
			</section>
		</>
	);
}

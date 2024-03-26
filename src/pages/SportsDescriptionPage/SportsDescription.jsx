import {
	BookingForma,
	Circle,
	CircleUnderText,
	Desc,
	SearchingTours,
} from '../../components/index.js';
// import styles from "./SportsDescription.module.css"
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
				{/* TODO this div is useless for now, remove it and move the p tag up a level */}
				<div className='about-text'>
					<p className='about-text__main'>
						Мы обоснованно гордимся отличной материально-технической базой и
						можем предложить своим гостям доски лучших мировых брендов: F2,
						Tabou, Unifiber, Gaastra, Big, Starboard, широкие борды большого
						литража со швертами для обучения с нуля, а также доски для
						продвинутых райдеров, паруса диапазоном от 1,5 до 7,5 м, прогулочные
						каяки с посадкой seatUp, прокат оборудования.
					</p>
				</div>
				<div className='about-back' />
			</section>
			<div className='options'>
				<div className='options-header'>
					{/* TODO if you writed H2 then write h2 tag */}
					<h1 className='options-header__text'>
						Заголовок раздела статьи (H2)
					</h1>
				</div>
				<div className='options-main'>
					<div className='options-image'>
						<img src='/img/serf.jpg' alt='' />
					</div>
					<div className='options-about'>
						<Desc />
						<Desc />
						<Desc />
						<Desc />
					</div>
				</div>
			</div>
			<section className='include'>
				<div className='include-header'>
					<div className='include-header__text'>Что входит</div>
				</div>
				{/* FIXME correct all spelling errors, unreadable*/}
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
			{/* FIXME fix uncorrected naming files and uncorrected spelling */}
			<BookingForma />
		</>
	);
}

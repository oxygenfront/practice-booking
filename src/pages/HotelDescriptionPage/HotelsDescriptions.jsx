import { BookingForma, HotelDesc, SearchingTours, VideoView } from '../../components/index.js'
// import styles from "./HotelDescription.module.css"
export function HotelsDescriptions() {
	return (
		<>
			<SearchingTours />
			<section className='section'>
				<div className='main__container'>
					<div className='main'>
						<div className='main-white'>
							<div className='main-white__text'>Номер стандарт</div>
						</div>
					</div>
				</div>
			</section>
			<section className='HotelSection'>
				<div className='hotel'>
					<HotelDesc />
				</div>
				<div className='hotel'>
					<HotelDesc />
				</div>
				<div className='hotel'>
					<HotelDesc />
				</div>
				<div className='hotel'>
					<HotelDesc />
				</div>
				<div className='hotel'>
					<HotelDesc />
				</div>
			</section>
			<VideoView />
			<section className='gallery'>
				<div className='gallery-header'>
					<div className='gallery-header__text'>галерея</div>
				</div>
				<div className='gallery-images'>
					<div className='gallery-img'>
						<img src='/img/gallery1.svg' alt='' />
					</div>
					<div className='gallery-img1'>
						<img src='/img/gallery2.svg' alt='' />
					</div>
					<div className='gallery-img'>
						<img src='/img/gallery3.svg' alt='' />
					</div>
				</div>
				<div className='gallery-underpic'>
					<img src='/img/bubles.svg' alt='' />
				</div>
			</section>
			<BookingForma />
		</>
	)
}

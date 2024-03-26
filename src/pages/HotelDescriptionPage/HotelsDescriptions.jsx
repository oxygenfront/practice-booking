import {
	BookingForma,
	HotelDesc,
	SearchingTours,
	VideoView,
} from '../../components/index.js';
// import styles from "./HotelDescription.module.css"
export function HotelsDescriptions() {
	return (
		<>
			<SearchingTours />
			<section className='section'>
				{/* FIXME why are you more than one div element */}
				<div className='main__container'>
					<div className='main'>
						<div className='main-white'>
							<div className='main-white__text'>Номер стандарт</div>
						</div>
					</div>
				</div>
			</section>
			{/* FIXME classname don't use camelcase */}
			<section className='HotelSection'>
				{/* TODO make it as a component */}
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
					{/* TODO use a h1-h6 element if this a title */}
					<div className='gallery-header__text'>Галерея</div>
				</div>
				{/* TODO maybe you want a list of cards here and not default blocks? */}
				<div className='gallery-images'>
					{/* FIXME move a component  */}
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
				{/* FIXME what is it ? Move a component or concat with previous */}
				<div className='gallery-underpic'>
					<img src='/img/bubles.svg' alt='' />
				</div>
			</section>
			<BookingForma />
		</>
	);
}

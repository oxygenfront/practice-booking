import { SearchingTours } from '../../components/index.js';
// import styles from "./MapPage.module.css"
export function MapPage() {
	return (
		<>
			<section className='section'>
				<div className='main__container'>
					<SearchingTours />
					{/* TODO why do we need this div block, maybe remove it and change the next div to p tag because it has one line text*/}
					<div className='main-white'>
						<div className='main-white__text'>
							Постройте свой маршрут до нашего отеля
						</div>
					</div>
				</div>
			</section>
			<section className='map'>
				<img src='/img/map.jpg' alt='' className='map-image' />
			</section>
			{/* TODO move a this block to component */}
			<section className='btn'>
				<div className='btn-header'>
					<div className='btn-header__text'>
						Заблудились? Поможем добраться!
					</div>
				</div>
				{/* FIXME this is a form so use the form tag */}
				<div className='btn-main'>
					<div className='btn-main__input'>
						<img
							src='/img/person-blue.svg'
							alt=''
							className='btn-main__image'
						/>
						<input type='text' placeholder='Ваше имя' />
					</div>
					<div className='btn-main__input'>
						<img
							src='/img/telephone-blue.svg'
							alt=''
							className='btn-main__image'
						/>
						<input type='text' placeholder='Ваш номер телефона' />
					</div>
					<button type='button' className='btn-main__button'>
						нужна помощь
					</button>
				</div>
			</section>
		</>
	);
}

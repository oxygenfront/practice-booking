import { SearchingTours } from '../../components/index.js'
// import styles from './ErrorPage.module.css'
export function ErrorPage() {
	return (
		<>
			<section className='section'>
				<div className='main__container'>
					<SearchingTours />
					<div className='main-white'>
						<div className='main-white__text'>
							Ого... Так далеко даже мы <div>не заходили</div>
						</div>
					</div>
				</div>
			</section>
			<section className='about'>
				<div className='about-main'>
					<div className='about-image'>
						<img src='/img/кругляши1.svg' alt='' className='about-image__img' />
					</div>
					<div className='about-number'>
						<div className='about-number__text'>404</div>
					</div>
					<div className='about-image1'>
						<img src='/img/кругляши2.svg' alt='' className='about-image__img' />
					</div>
				</div>
				<div className='about-paragraph'>
					<div className='about-paragraph__text'>
						Страницу, которую вы искали, похитили пираты. Попробуйте найти, то что было потеряно.
					</div>
				</div>
				<div className='about-btn'>
					<div className='about-btn__input'>
						<img src='/img/lupa.svg' alt='' className='about-btn__image' />
						<input type='text' placeholder='Найти' />
					</div>
				</div>
			</section>
		</>
	)
}

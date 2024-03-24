import { BookingForma, SearchingTours } from '../../components/index.js'
// import styles from './BookingPage.module.css'
export function BookingPage() {
	return (
		<div>
			<SearchingTours />
			<section className='section'>
				<div className='main__container'>
					<div className='main'>
						<div className='main-white'>
							<div className='main-white__text'>бронирование</div>
						</div>
					</div>
				</div>
			</section>
			<BookingForma />
		</div>
	)
}

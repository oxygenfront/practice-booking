import { Card, SearchingTours } from '../components/index.js'
export function HotelCards() {
	return (
		<>
			<SearchingTours />
			<section className='hotels'>
				<div className='hotels-cards'>
					<Card />
					<Card />
				</div>
			</section>
		</>
	)
}

import { Card, SearchingTours } from '../../components/index.js'
// import styles from "./HotelCards.module.css"
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

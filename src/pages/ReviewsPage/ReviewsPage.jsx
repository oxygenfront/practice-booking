import { SearchingTours, StarsBlock } from '../../components/index.js'
// import styles from "./ReviewsPage.module.css"
export function ReviewsPage() {
	return (
		<>
			<section className='section'>
				<div className='main__container'>
					<SearchingTours />
					<div className='main-white'>
						<div className='main-white__text'>отзывы о santorini</div>
					</div>
				</div>
			</section>
			<section className='reviews'>
				<StarsBlock />
				<StarsBlock />
				<StarsBlock />
				<StarsBlock />
				<StarsBlock />
				<StarsBlock />
			</section>
		</>
	)
}

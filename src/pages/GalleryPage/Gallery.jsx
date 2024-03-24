import { ActiveButton } from '../../components/Active/ActiveButton.jsx'
import { ActivePhoto } from '../../components/Active/ActivePhoto.jsx'
import { SearchingTours } from '../../components/index.js'
// import styles from "./Gallery.module.css"
export function Gallery() {
	return (
		<>
			<section className='section'>
				<div className='main__container'>
					<SearchingTours />
					<div className='main-white'>
						<div className='main-white__text'>Галерея</div>
					</div>
				</div>
			</section>
			<section className='active-weekend'>
				<div className='active-weekend__container'>
					<div className='active-weekend__buttons-wrapper'>
						<div className='active-weekend__buttons'>
							<ActiveButton />
							<ActiveButton />
							<ActiveButton />
							<ActiveButton />
							<ActiveButton />
						</div>
					</div>
				</div>
				<div className='active-weekend__container'>
					<ActivePhoto />
				</div>
				<div className='active-weekend__container'>
					<ActivePhoto />
				</div>
			</section>
		</>
	)
}

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
						{/* FIXME use h1-h6 tags because this title */}
						<div className='main-white__text'>Галерея</div>
					</div>
				</div>
			</section>
			<section className='active-weekend'>
				{/* FIXME use only container or wrapper, but don't use together */}
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
				{/* FIXME why you use two blocks with classname 'container' instead of one or move to component */}
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

import { SearchingTours } from '../components/index.js'

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
							<div className='active-weekend__buttons-item'>
								<span>номера</span>
							</div>
							<div className='active-weekend__buttons-item'>
								<span>Территория</span>
							</div>
							<div className='active-weekend__buttons-item'>
								<span>пляж</span>
							</div>
							<div className='active-weekend__buttons-item'>
								<span>паста-бар</span>
							</div>
							<div className='active-weekend__buttons-item'>
								<span>впечатления</span>
							</div>
						</div>
					</div>
				</div>
				<div className='active-weekend__container'>
					<div className='active-weekend__items'>
						<div className='active-weekend__items_top'>
							<div className='active-weekend__items_top-item btrr'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Виндсерфинг</span>
									<button type='button' />
								</div>
							</div>
							<div className='active-weekend__items_top-item btlr'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Кайтсерфинг</span>
									<button type='button' />
								</div>
							</div>
						</div>
						<div className='active-weekend__items_bottom'>
							<div className='active-weekend__items_bottom-item'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Эндуро-тур</span>
									<button type='button' />
								</div>
							</div>
							<div className='active-weekend__items_bottom-item'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Сафари на джипах</span>
									<button type='button' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='active-weekend__container'>
					<div className='active-weekend__items'>
						<div className='active-weekend__items_top'>
							<div className='active-weekend__items_top-item btrr'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Виндсерфинг</span>
									<button type='button' />
								</div>
							</div>
							<div className='active-weekend__items_top-item btlr'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Кайтсерфинг</span>
									<button type='button' />
								</div>
							</div>
						</div>
						<div className='active-weekend__items_bottom'>
							<div className='active-weekend__items_bottom-item'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Эндуро-тур</span>
									<button type='button' />
								</div>
							</div>
							<div className='active-weekend__items_bottom-item'>
								<div className='active-weekend__items_item_bottom-button'>
									<span>Сафари на джипах</span>
									<button type='button' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

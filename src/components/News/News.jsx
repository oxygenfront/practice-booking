// import styles from "./News.module.css"
export function News() {
	return (
		<>
			<div className='news-main'>
				<div className='news-main__image'>
					<img src='/img/breakfast.jpg' alt='' />
				</div>
				<div className='news-main__about'>
					<div className='news-main__head'>Самые вкусные праздники в santorini</div>
					<div className='news-main__desc'>
						Весь сезон наших гостей ждут развлечения в формате гастрономических фестивалей
					</div>
					<div className='news-main__btn'>
						<button type='button'>читать новость</button>
					</div>
				</div>
			</div>
		</>
	)
}

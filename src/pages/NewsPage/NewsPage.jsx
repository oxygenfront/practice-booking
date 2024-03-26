import { News } from '../../components/News/News';
// import styles from "./NewsPage.module.css"
export function NewsPage() {
	return (
		<section className='news'>
			<div className='news-header'>
				<div className='news-header__text'>Новости</div>
			</div>
			{/* TODO maybe you want a list of cards here and not default blocks? And you use blocks without root element (div or fragment)*/}
			<News />
			<News />
			<News />
			<News />
			<div className='news-slider'>
				<div className='news-slider__btn'>
					<img src='/img/Arrow 3.svg' alt='' className='news-slider__img' />
				</div>
				<div className='news-slider__numbers'>
					<span className='news-slider__numbers-txt'>1</span>
					<span className='news-slider__numbers-txt'>2</span>
					<span className='news-slider__numbers-txt'>3</span>
				</div>
				<div className='news-slider__btn'>
					<img src='/img/Arrow 3.svg' alt='' className='news-slider__img1' />
				</div>
			</div>
		</section>
	);
}

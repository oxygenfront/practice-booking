import { BookingForma } from '../components/index.js'
export function HotelsDescriptions() {
	return (
		<>
			<section className='section'>
				<div className='main__container'>
					<div className='main'>
						<div className='main-white'>
							<div className='main-white__text'>Номер стандарт</div>
						</div>
					</div>
				</div>
			</section>
			<section className='HotelSection'>
				<div className='hotel'>
					<div className='hotel-options'>
						<div className='hotel-name'>Описание номера</div>
						<img className='hotel-img' src='/img/hotelimage1.svg' alt='' />
						<div className='hotel-desc'>
							Уютный однокомнатный номер 18м². предназначен для размещения двоих гостей на основных местах
							и одного на дополнительном. Вид из номера на террасу. Отдельный вход. Номер располагает всем
							необходимым для комфортного проживания: Кровать стандарт, размеры: 160*200 см., Телевизор с
							эфирными каналами (+40), Сплит - система (кондиционирование, отопление) Панорамные окна с
							специальным напылением, так что при дневном свете они затененные и почти не видно. Шторы
							блэк-аут. Сейф Фирменная бутилированная вода . Мини-холодильник. Чайник и Чайный набор
							(пакетики). Вай фай. Завтраки. Платяной шкаф и обувной шкаф.
						</div>
					</div>
				</div>
				<div className='hotel'>
					<div className='hotel-options'>
						<div className='hotel-name'>В ванной комнате</div>
						<img className='hotel-img' src='/img/hotelimage1.svg' alt='' />
						<div className='hotel-desc'>
							Душ, зеркало, фен, детская подставка для ног, детское сиденье на унитаз, диспенсер с
							гигиеническими пакетами, комплект полотенец, халат, тапочки, набор гостиничной косметики.
						</div>
					</div>
				</div>
				<div className='hotel'>
					<div className='hotel-options'>
						<div className='hotel-name'>сервис</div>
						<img className='hotel-img' src='/img/hotelimage1.svg' alt='' />
						<div className='hotel-desc'>
							Уборка номера ежедневно или по требованию гостя. Смена постельного белья и полотенец – 1 раз
							в 3 дня или по требованию гостя. По просьбе гостя: зубной набор, бритвенный набор, расческа,
							детские халаты и тапочки, детский шампунь 1 раз в 10 дней, лосьон для тела, радио-няня,
							подогреватель для бутылочек, щетка для одежды, чайник, детская кроватка. Своя прачечная.
						</div>
					</div>
				</div>
				<div className='hotel'>
					<div className='hotel-options'>
						<div className='hotel-name'>услуги при заезде</div>
						<img className='hotel-img' src='/img/hotelimage1.svg' alt='' />
						<div className='hotel-desc'>
							Брендированные подарки детям до 12 лет. Сладости (халва подсолнечная, ванильная). Халат,
							тапочки, швейный набор, губка и лопатка для обуви.
						</div>
					</div>
				</div>
				<div className='hotel'>
					<div className='hotel-options'>
						<div className='hotel-name'>расчетные часы</div>
						<img className='hotel-img' src='/img/hotelimage1.svg' alt='' />
						<div className='hotel-desc'>
							Заезд после 15:00, выезд до 12:00. Возможет поздний выезд и ранний заезд по согласованию.
						</div>
					</div>
				</div>
			</section>
			<section className='video'>
				<div className='video-header'>
					<h1 className='video-header__text'>
						посмотрите обзорное
						<br />
						видео номера
					</h1>
				</div>
				<div className='video-main'>
					<iframe
						className='video-apples'
						width='1680'
						height='700'
						src='https://www.youtube.com/embed/QyveQtAR-k8'
						title='100 СГНИВШИХ, КИСЛЫХ ЯБЛОК!(мем)'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</div>
			</section>
			<section className='gallery'>
				<div className='gallery-header'>
					<div className='gallery-header__text'>галерея</div>
				</div>
				<div className='gallery-images'>
					<div className='gallery-img'>
						<img src='/img/gallery1.svg' alt='' />
					</div>
					<div className='gallery-img1'>
						<img src='/img/gallery2.svg' alt='' />
					</div>
					<div className='gallery-img'>
						<img src='/img/gallery3.svg' alt='' />
					</div>
				</div>
				<div className='gallery-underpic'>
					<img src='/img/bubles.svg' alt='' />
				</div>
			</section>
			<BookingForma />
		</>
	)
}

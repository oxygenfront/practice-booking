import { SearchingTours } from "../components/index.js";

export function MapPage() {
  return (
    <>
      <section className="section">
        <div className="container main__container">
          <SearchingTours />
          <div className="main-white">
            <div className="main-white__text">
              Постройте свой маршрут до нашего отеля
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <img src="/img/map.jpg" alt="" className="map-image" />
      </section>
      <section className="btn">
        <div className="btn-header">
          <div className="btn-header__text">
            Заблудились? Поможем добраться!
          </div>
        </div>
        <div className="btn-main">
          <div className="btn-main__input">
            <img
              src="/img/person-blue.svg"
              alt=""
              className="btn-main__image"
            />
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="btn-main__input">
            <img
              src="/img/telephone-blue.svg"
              alt=""
              className="btn-main__image"
            />
            <input type="text" placeholder="Ваш номер телефона" />
          </div>
          <button className="btn-main__button">нужна помощь</button>
        </div>
      </section>
    </>
  );
}

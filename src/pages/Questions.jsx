import { BookingForma, SearchingTours } from "../components";

export function Questions() {
  return (
    <div>
      <section className="section">
        <div className="container main__container">
          <SearchingTours />
          <div className="main-white">
            <div className="main-white__text">свяжитесь с нами</div>
          </div>
        </div>
      </section>
      <div className="about">
        <div className="about-cont">
          <div className="about-main">
            <div className="about-loc">
              <img
                src="/img/location.svg"
                alt=""
                className="about-loc__image"
              />
              <div className="about-loc__text1">
                298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
              </div>
            </div>
            <div className="about-loc">
              <img
                src="/img/telephone.svg"
                alt=""
                className="about-loc__image"
              />
              <div className="about-loc__text2">+7 (912) 038-80-44</div>
            </div>
            <div className="about-loc">
              <img src="/img/mail.svg" alt="" className="about-loc__image" />
              <div className="about-loc__text3">santorinihotel@mail.ru</div>
            </div>
          </div>
          <BookingForma />
        </div>
      </div>
    </div>
  );
}

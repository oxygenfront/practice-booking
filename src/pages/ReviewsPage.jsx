import { SearchingTours, StarsBlock } from "../components/index.js";

export function ReviewsPage() {
  return (
    <>
      <section className="section">
        <div className="container main__container">
          <SearchingTours />
          <div className="main-white">
            <div className="main-white__text">отзывы о santorini</div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <StarsBlock />
        <StarsBlock />
        <StarsBlock />
        <StarsBlock />
        <StarsBlock />
        <StarsBlock />
      </section>
    </>
  );
}

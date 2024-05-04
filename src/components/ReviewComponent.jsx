import React from "react";

const ReviewComponent = () => {
  return (
    <>
      <section className="overflow-hidden bg-smoke2 space" id="testi-sec">
        <div
          className="shape-mockup d-none d-xxl-block"
          data-bottom={0}
          data-left={0}
        >
          <img src="assets/img/shape/food_shape_3.png" alt="shape" />
        </div>
        <div
          className="shape-mockup d-none d-xxl-block"
          data-bottom={0}
          data-right={0}
        >
          <img src="assets/img/shape/food_shape_4.png" alt="shape" />
        </div>
        <div className="container">
          <div className="slider-area testi-grid-area">
            <div
              className="swiper th-slider testi-grid-thumb"
              data-slider-options='{"effect":"slide","slidesPerView":"3","spaceBetween":7,"loop":false}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="box-img">
                    <img
                      src="assets/img/testimonial/testi_3_1.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="box-img">
                    <img
                      src="assets/img/testimonial/testi_3_2.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="box-img">
                    <img
                      src="assets/img/testimonial/testi_3_3.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper th-slider"
              id="testiSlide1"
              data-slider-options='{"effect":"slide","loop":false,"thumbs":{"swiper":".testi-grid-thumb"}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <h3 className="testi-grid_title">Great Quality Foods</h3>
                    <p className="testi-grid_text">
                      <span>“</span>Some studies suggest that organic foods may
                      have higher levels of certain nutrients and antioxidants
                      compared to conventionally grown foods. However, this can
                      vary depending on factors like soil quality and growing
                      conditions.<span>”</span>
                    </p>
                    <h4 className="testi-grid_name">
                      Alex Hamilton -{" "}
                      <span className="testi-grid_desig">Doctor</span>
                    </h4>
                    <div className="testi-grid_review">
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <h3 className="testi-grid_title">Fresh Organic Foods</h3>
                    <p className="testi-grid_text">
                      <span>“</span>Some studies suggest that organic foods may
                      have higher levels of certain nutrients and antioxidants
                      compared to conventionally grown foods. However, this can
                      vary depending on factors like soil quality and growing
                      conditions.<span>”</span>
                    </p>
                    <h4 className="testi-grid_name">
                      Jasemin Jui -{" "}
                      <span className="testi-grid_desig">Consultant</span>
                    </h4>
                    <div className="testi-grid_review">
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <h3 className="testi-grid_title">100% Organic Foods</h3>
                    <p className="testi-grid_text">
                      <span>“</span>Some studies suggest that organic foods may
                      have higher levels of certain nutrients and antioxidants
                      compared to conventionally grown foods. However, this can
                      vary depending on factors like soil quality and growing
                      conditions.<span>”</span>
                    </p>
                    <h4 className="testi-grid_name">
                      Martin Danial -{" "}
                      <span className="testi-grid_desig">Doctor</span>
                    </h4>
                    <div className="testi-grid_review">
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#testiSlide1"
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              data-slider-next="#testiSlide1"
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewComponent;

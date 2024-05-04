import React from "react";

const DiscountComponent = () => {
  return (
    <>
      <section className="" data-pos-for="#shop-sec" data-sec-pos="bottom-half">
        <div className="container z-index-common">
          <div className="row gy-30">
            <div className="col-xl-6">
              <div
                className="offer-card mega-hover"
                data-bg-src="assets/img/bg/cta_bg_1_1.jpg"
              >
                <span className="h6 box-subtitle">
                  Get Extra <span className="text-theme">50% Off</span>
                </span>
                <h3 className="box-title">
                  Fresh Vegetable &amp; <br /> Organic Fruits
                </h3>
                <a href="shop-details.html" className="th-btn">
                  Shop Now
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="offer-card mega-hover"
                data-bg-src="assets/img/bg/cta_bg_1_2.jpg"
              >
                <span className="h6 box-subtitle">
                  Get Extra <span className="text-theme">50% Off</span>
                </span>
                <h3 className="box-title">
                  Green &amp; Organic <br /> Vegetables
                </h3>
                <a href="shop-details.html" className="th-btn">
                  Shop Now
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountComponent;

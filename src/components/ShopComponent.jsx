import Item from "@/containers/Item";
import React from "react";

const ShopComponent = () => {
  return (
    <>
      <section className="bg-smoke2 space" id="shop-sec">
        <div className="shape-mockup" data-top={0} data-left={0}>
          <img src="assets/img/shape/vector_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom={0} data-right={0}>
          <img src="assets/img/shape/vector_shape_2.png" alt="shape" />
        </div>
        <div className="container text-center">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
              Organic Products
            </span>
            <h2 className="sec-title">Organic &amp; Fresh Products Daily!</h2>
          </div>
          <div className="filter-menu indicator-active filter-menu-active">
            <button
              data-filter="*"
              className="th-btn tab-btn active"
              type="button"
            >
              ALL
            </button>
            <button
              data-filter=".cat1"
              className="th-btn tab-btn "
              type="button"
            >
              Fruits
            </button>
            <button
              data-filter=".cat2"
              className="th-btn tab-btn"
              type="button"
            >
              Vegetable
            </button>
            <button
              data-filter=".cat3"
              className="th-btn tab-btn"
              type="button"
            >
              Meat &amp; Fish
            </button>
            <button
              data-filter=".cat4"
              className="th-btn tab-btn"
              type="button"
            >
              Fruit Juice
            </button>
            <button
              data-filter=".cat5"
              className="th-btn tab-btn"
              type="button"
            >
              Salads
            </button>
          </div>
          <div className="row gy-4 filter-active">
            {[0, 1, 2, 3, 4, 5, 63].map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-sm-6 filter-item"
                key={item}
              >
                <Item />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopComponent;

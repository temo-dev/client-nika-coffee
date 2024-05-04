import React from "react";

const CategoryComponent = () => {
  return (
    <>
      <section className="space bg-smoke2" id="category-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
              Product Category
            </span>
            <h2 className="sec-title">Shop By Category</h2>
          </div>
          <div
            className="swiper th-slider"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"3"},"768":{"slidesPerView":"4"},"992":{"slidesPerView":"5"},"1200":{"slidesPerView":"6"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_1.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Fresh Fruits</a>
                  </h3>
                  <p className="box-text">08 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_2.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Natural Fruits</a>
                  </h3>
                  <p className="box-text">05 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_3.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Dairy Products</a>
                  </h3>
                  <p className="box-text">04 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_4.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Tea &amp; Coffee</a>
                  </h3>
                  <p className="box-text">07 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_5.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Meat and Fish</a>
                  </h3>
                  <p className="box-text">10 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="category-box">
                  <div className="box-icon">
                    <img
                      src="assets/img/product/category_2_6.png"
                      alt="Image"
                    />
                  </div>
                  <h3 className="box-title">
                    <a href="shop.html">Fresh Fish</a>
                  </h3>
                  <p className="box-text">07 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryComponent;

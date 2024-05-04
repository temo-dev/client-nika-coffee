import Item from "@/containers/Item";
import React from "react";

const ProductHotComponent = () => {
  return (
    <>
      <section
        className="bg-top-center overflow-hidden space-top"
        style={{ backgroundImage: `url('/assets/img/item/deal_bg_2.jpg ')` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Hurry Up Now
                </span>
                <h2 className="sec-title text-white">Deals Of The Week</h2>
                <p className="sec-text text-light">
                  Integrate organic matter through composting, cover cropping,
                  and mulching. This enriches the soil with essential nutrients.
                </p>
              </div>
            </div>
          </div>
          <div className="deal-sec-area">
            <div
              className="row gy-4 justify-content-center"
              style={{ paddingTop: "100px" }}
            >
              <div className="col-xl-3 text-xl-start text-center">
                <div
                  className="offer-grid mega-hover"
                  style={{
                    backgroundImage: "url(assets/img/item/cta_bg_4_1.jpg)",
                  }}
                >
                  <span className="h6 box-subtitle text-white">
                    <span className="text-theme">20% Online </span>OFF
                  </span>
                  <h3 className="box-title text-white">
                    Now You Get The <br /> Vegetable
                  </h3>
                  <a href="shop-details.html" className="th-btn btn-sm style3">
                    Shop Now
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row gy-4">
                  {[0, 1, 2].map((item) => (
                    <div className="col-lg-4 col-sm-6" key={item}>
                      <Item />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHotComponent;

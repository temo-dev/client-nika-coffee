import Link from "next/link";
import React, { useState } from "react";

const CardItem = () => {
  return (
    <div className="container bg-white rounded-10">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img">
              <img
                src="assets/img/item/layerTraThachDao.png"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <p className="price">
              $120.85<del>$150.99</del>
            </p>
            <h2 className="product-title">Bosco Apple Fruit</h2>
            <div className="product-rating">
              <div
                className="star-rating"
                role="img"
                aria-label="Rated 5.00 out of 5"
              >
                <span style={{ width: "100%" }}>
                  Rated <strong className="rating">5.00</strong> out of 5 based
                  on <span className="rating">1</span> customer rating
                </span>
              </div>
              <a href="shop-details.html" className="woocommerce-review-link">
                (<span className="count">4</span> customer reviews)
              </a>
            </div>
            <p className="text">
              Prepare to embark on a sensory journey with the Bosco Apple, a
              fruit that transcends the ordinary and promises an unparalleled
              taste experience. These apples are nothing short of nature’s
              masterpiece, celebrated for their distinctive blend of flavors and
              their captivating visual allure.
            </p>
            <div className="mt-2 link-inherit">
              <p>
                <strong className="text-title me-3">Availability:</strong>
                <span className="stock in-stock">
                  <i className="far fa-check-square me-2 ms-1" />
                  In Stock
                </span>
              </p>
            </div>
            <div className="actions">
              <Link
                className="th-btn"
                href="https://wolt.com/cs/cze/prague/restaurant/nika-coffee-and-tea"
              >
                Go to Shop
              </Link>
            </div>
            <div className="product_meta">
              <span className="sku_wrapper">
                SKU: <span className="sku">Bosco-Apple-Fruit</span>
              </span>
              <span className="posted_in">
                Category: <a href="shop.html">Fresh Fruits</a>
              </span>
              <span>
                Tags: <a href="shop.html">Fruits</a>
                <a href="shop.html">Organic</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

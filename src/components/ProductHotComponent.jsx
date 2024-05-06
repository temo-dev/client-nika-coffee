"use client";
import Item from "@/containers/Item";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { data } from "@/data";

const ProductHotComponent = () => {
  const [dataHot, setDataHot] = useState([null]);
  useEffect(() => {
    setDataHot(data.filter((item) => item.isHot === true));
  }, []);
  return (
    <>
      <section
        className="bg-top-center overflow-hidden space-top"
        style={{ backgroundImage: `url('/assets/img/item/deal_bg_2.jpg')` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                  <FormattedMessage
                    id="product-hot-subtitle"
                    defaultMessage="product-hot-subtitle"
                    description="product-hot-subtitle"
                  />
                </span>
                <h2 className="sec-title text-white">
                  <FormattedMessage
                    id="product-hot-sec-title"
                    defaultMessage="product-hot-sec-title"
                    description="product-hot-sec-title"
                  />
                </h2>
                <p className="sec-text text-light">
                  <FormattedMessage
                    id="product-hot-sec-text"
                    defaultMessage="product-hot-sec-text"
                    description="product-hot-sec-text"
                  />
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
                    <span className="text-theme">
                      <FormattedMessage
                        id="product-hot-text-theme"
                        defaultMessage="product-hot-text-theme"
                        description="product-hot-text-theme"
                      />{" "}
                    </span>
                  </span>
                  <h3 className="box-title text-white">
                    <FormattedMessage
                      id="product-hot-box-title-1"
                      defaultMessage="product-hot-box-title-1"
                      description="product-hot-box-title-1"
                    />{" "}
                    <br />
                    <FormattedMessage
                      id="product-hot-box-title-2"
                      defaultMessage="product-hot-box-title-2"
                      description="product-hot-box-title-2"
                    />
                  </h3>
                  <Link href="/menu" className="th-btn btn-sm style3">
                    <FormattedMessage
                      id="button"
                      defaultMessage="button"
                      description="button"
                    />
                    <i className="fas fa-chevrons-right ms-2" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row gy-4">
                  {dataHot?.map((item) => (
                    <Item product={item} key={item?.id} />
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

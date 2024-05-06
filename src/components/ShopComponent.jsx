"use client";
import Item from "@/containers/Item";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const ShopComponent = ({ data }) => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    console.log(filterCategory);
    let newData = data?.filter((item) => item.isCategory == filterCategory);
    setDataItem(newData);
    if (filterCategory !== "all") {
      let newData = data?.filter((item) => item.isCategory == filterCategory);
      setDataItem(newData);
    } else {
      setDataItem(data);
    }
  }, [filterCategory, data]);

  const hanldeFilter = (category) => {
    switch (category) {
      default:
        setFilterCategory(category);
        break;
    }
  };

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
              <FormattedMessage
                id="shop-sub-title"
                defaultMessage="shop-sub-title"
                description="shop-sub-title"
              />
            </span>
            <h2 className="sec-title">
              <FormattedMessage
                id="shop-sec-title"
                defaultMessage="shop-sec-title"
                description="shop-sec-title"
              />
            </h2>
          </div>
          <div className="filter-menu indicator-active filter-menu-active">
            {["all", "tea", "milk-tea", "sugar-brown", "cafe", "yogurt"].map(
              (item) => (
                <button
                  data-filter="*"
                  className="th-btn tab-btn active"
                  type="button"
                  onClick={() => hanldeFilter(item)}
                >
                  <FormattedMessage
                    id={`category-${item}`}
                    defaultMessage="button"
                    description="button"
                  />
                </button>
              )
            )}
          </div>
          <div className="row gy-4 filter-active">
            {dataItem?.map((item) => (
              <Item product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopComponent;

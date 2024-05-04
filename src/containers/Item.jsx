import { Button, Modal } from "antd";
import React, { useState } from "react";
import CardItem from "./CardItem";
import Link from "next/link";

const Item = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {" "}
      <div className="th-product product-grid">
        <div className="product-img">
          <img src="/assets/img/item/oLongNhaiKem.png" alt="Product Image" />
          <span className="product-tag">Hot</span>
          <div className="actions">
            <Button className="icon-btn popup-content" onClick={showModal}>
              <i className="far fa-eye" />
            </Button>
            <Link
              href="https://wolt.com/cs/cze/prague/restaurant/nika-coffee-and-tea"
              className="icon-btn"
            >
              <i className="far fa-cart-plus" />
            </Link>
          </div>
        </div>
        <div className="product-content">
          <a href="shop-details.html" className="product-category">
            Fresh Fruits
          </a>
          <h3 className="product-title">
            <a href="shop-details.html">Strawberry juice</a>
          </h3>
          <span className="price">
            $08.85<del>$06.99</del>
          </span>
          <div className="woocommerce-product-rating">
            <span className="count">(120 Reviews)</span>
            <div
              className="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span>
                Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                <span className="rating">1</span> customer rating
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"auto"}
        style={{ maxWidth: "80vw" }}
      >
        <CardItem />
      </Modal>
    </>
  );
};

export default Item;

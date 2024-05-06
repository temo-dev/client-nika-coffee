"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import CardItem from "./CardItem";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const Item = ({ product }) => {
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
      <div className="col-lg-4 col-sm-6">
        <div className="th-product product-grid">
          <div className="product-img">
            <Image
              src={product?.image}
              alt="Product Image"
              width={250}
              height={300}
              fetchpriority="high"
            />
            <span className="product-tag">
              <FormattedMessage
                id={product?.tag || "item-tag"}
                defaultMessage="item-tag"
                description="item-tag"
              />
            </span>
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
            <Link
              href="https://wolt.com/cs/cze/prague/restaurant/nika-coffee-and-tea"
              className="product-category"
            >
              <FormattedMessage
                id={product?.categoryProduct || "item-1-category"}
                defaultMessage="item-1-category"
                description="item-1-category"
              />
            </Link>
            <h3 className="product-title">
              <Link href="https://wolt.com/cs/cze/prague/restaurant/nika-coffee-and-tea">
                <FormattedMessage
                  id={product?.nameProduct || "item-1-name"}
                  defaultMessage="item-1-name"
                  description="item-1-name"
                />
              </Link>
            </h3>
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
        <CardItem product={product} />
      </Modal>
    </>
  );
};

export default Item;

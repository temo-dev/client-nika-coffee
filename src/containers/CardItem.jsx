import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const CardItem = ({ product }) => {
  return (
    <div className="container bg-white rounded-10">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img">
              <Image
                src={product?.image}
                alt="Product Image"
                width={580}
                height={580}
                priority
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <h2 className="product-title">
              <FormattedMessage
                id={product?.nameProduct || "item-1-name"}
                defaultMessage="item-1-name"
                description="item-1-name"
              />
            </h2>
            <p className="text">
              <FormattedMessage
                id={product?.description || "item-1-description"}
                defaultMessage="item-1-description"
                description="item-1-description"
              />
            </p>
            <div className="actions">
              <Link
                className="th-btn"
                href="https://wolt.com/cs/cze/prague/restaurant/nika-coffee-and-tea"
              >
                <FormattedMessage
                  id="button"
                  defaultMessage="button"
                  description="button"
                />
              </Link>
            </div>
            <div className="product_meta">
              <span className="posted_in">
                <FormattedMessage
                  id="category"
                  defaultMessage="category"
                  description="category"
                />
                :{" "}
                <Link href="/menu">
                  <FormattedMessage
                    id={product?.categoryProduct || "item-1-category"}
                    defaultMessage="item-1-category"
                    description="item-1-category"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureComponent = () => {
  return (
    <>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 text-center text-xl-start"
              style={{ zIndex: "9" }}
            >
              <div className="title-area mb-32">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  About Us Company
                </span>
                <h2 className="sec-title">
                  Organic Integrity Durable Impact Frutin's Story
                </h2>
                <p className="sec-text">
                  Some studies suggest that organic foods may have higher levels
                  of certain nutrients and antioxidants compared to
                  conventionally grown foods. However, this can vary depending
                  on factors like soil quality and growing conditions.
                </p>
              </div>
              <div className="checklist list-two-column mb-40">
                <ul>
                  <li>100% Organic Products</li>
                  <li>No Synthetic Chemicals</li>
                  <li>Always Fresh &amp; Natural Foods</li>
                  <li>Best Prices</li>
                  <li>Environmental Benefits</li>
                </ul>
              </div>
              <div>
                <Link href="/menu" className="th-btn">
                  Discover More
                  <i className="fas fa-chevrons-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mb-40 mb-xl-0">
              <div className="img-box5">
                <div className="shape1">
                  <img src="assets/img/item/shape-left.png" alt="About" />
                </div>
                <div className="img1">
                  <Image
                    src="/assets/img/item/layerTraThachDao.png"
                    alt="About"
                    width={800}
                    height={800}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureComponent;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const FeatureComponent = ({ feature }) => {
  const [isRight, setIsRight] = useState(true);
  useEffect(() => {
    setIsRight(feature?.isRight);
  }, []);

  return (
    <>
      {isRight ? (
        <div className="overflow-hidden space" id="about-sec">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 text-center text-xl-start"
                style={{ zIndex: "9" }}
              >
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    <FormattedMessage
                      id={feature?.subTitle}
                      defaultMessage="feature-subtitle"
                      description="feature-subtitle"
                    />
                  </span>
                  <h2 className="sec-title">
                    <FormattedMessage
                      id={feature?.secTitle}
                      defaultMessage="feature-sec-title"
                      description="feature-sec-title"
                    />
                  </h2>
                  <p className="sec-text">
                    <FormattedMessage
                      id={feature?.sectText}
                      defaultMessage="feature-sec-text"
                      description="feature-sec-text"
                    />
                  </p>
                </div>
                <div className="checklist list-two-column mb-40">
                  <ul>
                    {feature?.feature.map((item) => (
                      <li key={item.id}>
                        <FormattedMessage
                          id={item?.context}
                          defaultMessage="feature-checklist-item-1"
                          description="feature-checklist-item-1"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="/menu" className="th-btn">
                    <FormattedMessage
                      id="button"
                      defaultMessage="button"
                      description="button"
                    />
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
      ) : (
        <div className="overflow-hidden space" id="about-sec">
          <div className="container">
            <div className="row align-items-center">
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
              <div
                className="col-xl-6 text-center text-xl-start"
                style={{ zIndex: "9" }}
              >
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    <FormattedMessage
                      id={feature?.subTitle}
                      defaultMessage="feature-subtitle"
                      description="feature-subtitle"
                    />
                  </span>
                  <h2 className="sec-title">
                    <FormattedMessage
                      id={feature?.secTitle}
                      defaultMessage="feature-sec-title"
                      description="feature-sec-title"
                    />
                  </h2>
                  <p className="sec-text">
                    <FormattedMessage
                      id={feature?.sectText}
                      defaultMessage="feature-sec-text"
                      description="feature-sec-text"
                    />
                  </p>
                </div>
                <div className="checklist list-two-column mb-40">
                  <ul>
                    {feature?.feature.map((item) => (
                      <li key={item.id}>
                        <FormattedMessage
                          id={item?.context}
                          defaultMessage="feature-checklist-item-1"
                          description="feature-checklist-item-1"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="/menu" className="th-btn">
                    <FormattedMessage
                      id="button"
                      defaultMessage="button"
                      description="button"
                    />
                    <i className="fas fa-chevrons-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureComponent;

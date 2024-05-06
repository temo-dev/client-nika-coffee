import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

export const HeroComponent = () => {
  return (
    <>
      <div
        className="th-hero-wrapper hero-1"
        id="hero"
        style={{ backgroundImage: "url(/assets/img/item/hero_bg_1_2.jpg)" }}
      >
        <div
          className="swiper th-slider"
          id="heroSlide1"
          data-slider-options='{"effect":"fade"}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {" "}
              <div className="hero-inner">
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <img
                        src="assets/img/theme-img/title_icon.svg"
                        alt="shape"
                      />
                      <FormattedMessage
                        id="hero-sub-title"
                        defaultMessage={"hero-sub-title"}
                        description={"hero-sub-title"}
                      />
                    </span>
                    <h1 className="hero-title">
                      <span
                        className="title1"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        <img
                          className="title-img"
                          src="assets/img/hero/hero_title_shape.svg"
                          alt="icon"
                        />
                        <FormattedMessage
                          id="hero-title-1"
                          defaultMessage="hero-title-1"
                          description="hero-title-1"
                        />{" "}
                        <span className="text-theme">
                          {" "}
                          <FormattedMessage
                            id="hero-title-2"
                            defaultMessage="hero-title-2"
                            description="hero-title-2"
                          />
                        </span>
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        <FormattedMessage
                          id="hero-title-3"
                          defaultMessage="hero-title-3"
                          description="hero-title-3"
                        />
                      </span>
                    </h1>
                    <Link
                      href="/menu"
                      className="th-btn"
                      data-ani="slideinup"
                      data-ani-delay="0.7s"
                    >
                      <FormattedMessage
                        id="button"
                        defaultMessage="button"
                        description="button"
                      />
                      <i className="fas fa-chevrons-right ms-2" />
                    </Link>
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.5s"
                >
                  <Image
                    src="/assets/img/item/banner-hero.png"
                    alt="Image"
                    priority
                    width={650}
                    height={650}
                  />
                  <img src="assets/img/hero/hero_shape_1_1.png" alt="shape" />
                </div>
                <div
                  className="hero-shape1"
                  data-ani="slideinup"
                  data-ani-delay="0.5s"
                >
                  <img src="assets/img/hero/hero_shape_1_1.png" alt="shape" />
                </div>
                <div
                  className="hero-shape2"
                  data-ani="slideindown"
                  data-ani-delay="0.6s"
                >
                  <img src="assets/img/hero/hero_shape_1_2.png" alt="shape" />
                </div>
                <div
                  className="hero-shape3"
                  data-ani="slideinleft"
                  data-ani-delay="0.7s"
                >
                  <img src="assets/img/hero/hero_shape_1_3.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape4">
          <img
            className="svg-img"
            src="assets/img/hero/hero_shape_1_4.svg"
            alt="shape"
          />
        </div>
      </div>
    </>
  );
};

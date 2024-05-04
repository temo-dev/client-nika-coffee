import Image from "next/image";
import React from "react";

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
                      100% Quality Foods
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
                        Natural <span className="text-theme">Fruits</span>{" "}
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        Vegetable
                      </span>
                    </h1>
                    <a
                      href="about.html"
                      className="th-btn"
                      data-ani="slideinup"
                      data-ani-delay="0.7s"
                    >
                      Discover More
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
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
            <div className="swiper-slide">
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
                      100% Organic Foods
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
                        Organic <span className="text-theme">Fruits</span>{" "}
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        For Health
                      </span>
                    </h1>
                    <a
                      href="about.html"
                      className="th-btn"
                      data-ani="slideinup"
                      data-ani-delay="0.7s"
                    >
                      Discover More
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.5s"
                >
                  <img src="assets/img/hero/hero_1_2.png" alt="Image" />
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
            <div className="swiper-slide">
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
                      100% Fresh Foods
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
                        Quality <span className="text-theme">Fruits</span>{" "}
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        Farming
                      </span>
                    </h1>
                    <a
                      href="about.html"
                      className="th-btn"
                      data-ani="slideinup"
                      data-ani-delay="0.7s"
                    >
                      Discover More
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.5s"
                >
                  <img src="assets/img/hero/hero_1_3.png" alt="Image" />
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

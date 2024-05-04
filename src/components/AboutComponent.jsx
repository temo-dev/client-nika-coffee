import React from "react";

const AboutComponent = () => {
  return (
    <>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_1_2.jpg" alt="Image" />
                </div>
                <div className="shape1 movingX">
                  <img src="assets/img/normal/about_1_3.png" alt="Image" />
                </div>
                <div className="year-counter">
                  <div className="year-counter_number">
                    <span className="counter-number">23</span>+
                  </div>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-5 ps-xl-2 ms-xl-1 text-center text-xl-start">
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    About Our Company
                  </span>
                  <h2 className="sec-title">
                    Eating Right Start With Organic Food
                  </h2>
                  <p className="sec-text">
                    Organic foods are produced through a farming system that
                    avoids the use of synthetic pesticides, herbicides,
                    genetically modified organism (GMOs), and artificial
                    fertilizers. Instead, organic farmers rely on natural
                    methods like crop rotation. composting, and biological pest
                    control.
                  </p>
                </div>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="box-icon">
                      <img
                        src="assets/img/icon/about_feature_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="box-title">The Agriculture Leader</h3>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img
                        src="assets/img/icon/about_feature_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="box-title">Smart Organic Solutions</h3>
                  </div>
                </div>
                <div>
                  <a href="about.html" className="th-btn">
                    Discover More
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;

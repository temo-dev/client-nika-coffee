import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        style={{
          backgroundImage: `url(/assets/img/item/hero_bg_1_2.jpg)`,
        }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <Link href="/">
                        <Image
                          src="/assets/img/logoNika3-03.png"
                          alt="nika-coffee"
                          width={150}
                          height={150}
                          fetchpriority="high"
                        />
                      </Link>
                    </div>
                    <p className="about-text">
                      <FormattedMessage
                        id="footer-about"
                        defaultMessage={"footer-about"}
                        description={"footer-about"}
                      />
                    </p>
                    <div className="th-social">
                      <Link href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto"></div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title" style={{ color: "#017d03" }}>
                    <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                    <FormattedMessage
                      id="footer-contact"
                      defaultMessage={"footer-contact"}
                      description={"footer-contact"}
                    />
                  </h3>
                  <div className="th-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-location-dot" />
                      </div>
                      <p className="info-box_text">Praha-Letnany</p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <p className="info-box_text">
                        <Link
                          href="tel:+420774324885"
                          className="info-box_link"
                        >
                          +(420)-774-324-885
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto"></div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row gy-2 align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024{" "}
                  <Link href="https://www.hatss.eu">HatSolution</Link>. All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                          priority
                        />
                      </Link>
                    </div>
                    <p className="about-text">
                      We provide specialized winterization services to safeguard
                      your pool during the off-season, and when spring arrives,
                      we handle the thorough opening process.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                {/* <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                    Quick Links
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="project.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="faq.html">Help &amp; FAQs</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                    Contact Us
                  </h3>
                  <div className="th-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-location-dot" />
                      </div>
                      <p className="info-box_text">
                        8502 Preston Rd. Inglewood, Maine 98380
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <p className="info-box_text">
                        <a href="tel:+16326543564" className="info-box_link">
                          +(163)-2654-3564
                        </a>
                        <a href="tel:+16326545432" className="info-box_link">
                          +(163)-2654-5432
                        </a>
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <p className="info-box_text">
                        <a
                          href="mailto:help24/7@frutin.com"
                          className="info-box_link"
                        >
                          help24/7@frutin.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                {/* <div className="widget footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                    Instagram
                  </h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_1.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_1.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_2.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_2.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_3.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_3.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_4.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_4.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
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
              {/* <div className="col-md-6 text-center text-md-end">
                <div className="payment-img">
                  <img
                    src="assets/img/normal/payment_methods.png"
                    alt="Image"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

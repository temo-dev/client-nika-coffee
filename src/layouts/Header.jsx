import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <p className="header-notice">
                  Orders of $50 or more qualify for free shipping!
                </p>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-sm-inline-block">
                      <i className="fal fa-location-dot" />
                      <a href="https://www.google.com/maps">
                        8502 Preston Rd. Inglewood, Maine 98380
                      </a>
                    </li>
                    <li>
                      <div className="social-links">
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="/">
                      <Image
                        src="/assets/img/logoNika3-03.png"
                        alt="nika-coffee"
                        width={100}
                        height={100}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/menu">Menu</Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                    onClick={showDrawer}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                {/* <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="simple-icon sideMenuToggler"
                    >
                      <span className="badge">5</span>
                      <i className="fa-regular fa-cart-shopping" />
                    </button>
                    <a href="shop.html" className="th-btn style4">
                      Shop Now
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Drawer title="Nika - Coffee and Tea" onClose={onClose} open={open}>
          <nav className="th-mobile-menu d-lg-inline-block">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
            </ul>
          </nav>
        </Drawer>
      </header>
    </>
  );
};

export default Header;

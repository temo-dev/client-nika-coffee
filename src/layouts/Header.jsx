import { useAppData } from "@/store/appStore";
import { Drawer, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { changeLanguage: changeLanguage, language: language } = useAppData();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleChange = (value) => {
    changeLanguage(value);
  };
  return (
    <>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <p className="header-notice">
                  <FormattedMessage
                    id="header-notice"
                    defaultMessage={"header-notice"}
                    description={"header-notice"}
                  />
                </p>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-sm-inline-block">
                      <i className="fal fa-location-dot" />
                      <FormattedMessage
                        id="header-location"
                        defaultMessage={"header-location"}
                        description={"header-location"}
                      />
                    </li>
                    <li>
                      <div className="social-links">
                        <Link href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://www.youtube.com/">
                          <i className="fab fa-youtube" />
                        </Link>
                        <Select
                          defaultValue={language}
                          style={{ width: 120, color: "#000" }}
                          onChange={handleChange}
                          options={[
                            { value: "en", label: "English" },
                            { value: "cs", label: "Czech" },
                            { value: "vi", label: "Vietnam" },
                          ]}
                        />
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
                        fetchpriority="high"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link href="/">
                          <FormattedMessage
                            id="home"
                            defaultMessage={"home"}
                            description={"home"}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <FormattedMessage
                            id="about-us"
                            defaultMessage={"about-us"}
                            description={"about-us"}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/menu">
                          <FormattedMessage
                            id="menu"
                            defaultMessage={"menu"}
                            description={"menu"}
                          />
                        </Link>
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
              </div>
            </div>
          </div>
        </div>
        <Drawer title="Nika - Coffee and Tea" onClose={onClose} open={open}>
          <nav className="th-mobile-menu d-lg-inline-block">
            <ul>
              <li>
                <Link href="/">
                  <FormattedMessage
                    id="home"
                    defaultMessage={"home"}
                    description={"home"}
                  />
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <FormattedMessage
                    id="about-us"
                    defaultMessage={"about-us"}
                    description={"about-us"}
                  />
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <FormattedMessage
                    id="menu"
                    defaultMessage={"menu"}
                    description={"menu"}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </Drawer>
      </header>
    </>
  );
};

export default Header;

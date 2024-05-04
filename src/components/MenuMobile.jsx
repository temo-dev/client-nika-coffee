import React from "react";

const MenuMobile = () => {
  return (
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle">
          <i className="fal fa-times" />
        </button>
        <div className="mobile-logo">
          <a href="home-organic-farm.html">
            <img src="assets/img/logo.svg" alt="Frutin" />
          </a>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li className="menu-item-has-children">
              <a href="home-organic-farm.html">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="home-organic-farm.html">Organic Farm</a>
                </li>
                <li>
                  <a href="home-organic-food.html">Organic Food</a>
                </li>
                <li>
                  <a href="home-mega-shop.html">Mega Shop</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Service</a>
              <ul className="sub-menu">
                <li>
                  <a href="service.html">Service</a>
                </li>
                <li>
                  <a href="service-details.html">Service Details</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart Page</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="team-details.html">Team Details</a>
                </li>
                <li>
                  <a href="project.html">Project Gallery</a>
                </li>
                <li>
                  <a href="project-details.html">Project Details</a>
                </li>
                <li>
                  <a href="faq.html">Faq Page</a>
                </li>
                <li>
                  <a href="error.html">Error Page</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;

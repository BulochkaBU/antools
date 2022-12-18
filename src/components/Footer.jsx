import React from "react";
import { Container } from "react-bootstrap";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer__item">
              <img src={logo} alt="logo" />

              <div className="footer__subtitle">Copyright 2021. Antools</div>
              <div className="footer__content">
                Antool is a web collection of information on paid or free Design
                and Development tools
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer__item">
              <div className="footer__title">Contact Us</div>
              <ul>
                <li>+621987363</li>
                <li>M Building, No.10 A</li>
                <li>antools@awesome.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer__item">
              <div className="footer__title">Categories</div>
              <ul>
                <li>Design</li>
                <li>Development</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer__item">
              <div className="footer__title">Company Info</div>
              <ul>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

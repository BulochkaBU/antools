import React from "react";
import { Container, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import illustration from "../images/Illustration.png";
import search from "../images/icons/search.png";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";

const Promo = () => {
  return (
    <section className="promo">
      <NavBar />
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="promo__body">
              <h1>
                Awesome tools for Designer & Developer
                <span>.</span>
              </h1>
              <div className="subtitle subtitle_promo">
                Antool is a web collection of information on paid or free Design
                and Development tools
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    type="text"
                    placeholder="find more than 430+ tools..."
                  />
                  <img className="icon-search" src={search} alt="search" />
                  <button className="main-btn">Search</button>
                </Form.Group>
              </Form>
              <div className="social">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
              </div>
              <img
                className="promo__bg-img"
                src={illustration}
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Promo;

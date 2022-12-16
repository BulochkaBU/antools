import React from "react";
import { Container, Button } from "react-bootstrap";

import figma from "../images/icons/figma.svg";

const PopularTools = () => {
  return (
    <section className="popular-tools">
      <Container>
        <div className="title title_popular">Most Popular Tools</div>
        <div className="subtitle subtitle_center">
          Tools for the best Designers and Developers most popularly used in the
          world
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="popular-tools__item">
              <div className="popular-tools__item__wrapper-titles">
                <img
                  className="popular-tools__item__icon"
                  src={figma}
                  alt="figma"
                ></img>
                <div className="popular-tools__item__subheader">
                  <div className="popular-tools__item__title">Figma</div>
                  <div className="popular-tools__item__subtitle">Free</div>
                </div>
              </div>
              <div className="popular-tools__item__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="popular-tools__item__footer">
                <div className="popular-tools__item__wrapper-icons">
                  <div className="square">
                    <i className="fa-solid fa-heart fa-lg"></i>
                  </div>
                  <div className="square">
                    <i className="fa-sharp fa-solid fa-folder-plus fa-lg"></i>
                  </div>
                </div>
                <button className="link-btn">Visit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="popular-tools__item">
              <div className="popular-tools__item__wrapper-titles">
                <img
                  className="popular-tools__item__icon"
                  src={figma}
                  alt="figma"
                ></img>
                <div className="popular-tools__item__subheader">
                  <div className="popular-tools__item__title">Figma</div>
                  <div className="popular-tools__item__subtitle">Free</div>
                </div>
              </div>
              <div className="popular-tools__item__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="popular-tools__item__footer">
                <div className="popular-tools__item__wrapper-icons">
                  <div className="square">
                    <i className="fa-solid fa-heart fa-lg"></i>
                  </div>
                  <div className="square">
                    <i className="fa-sharp fa-solid fa-folder-plus fa-lg"></i>
                  </div>
                </div>
                <button className="link-btn">Visit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="popular-tools__item">
              <div className="popular-tools__item__wrapper-titles">
                <img
                  className="popular-tools__item__icon"
                  src={figma}
                  alt="figma"
                ></img>
                <div className="popular-tools__item__subheader">
                  <div className="popular-tools__item__title">Figma</div>
                  <div className="popular-tools__item__subtitle">Free</div>
                </div>
              </div>
              <div className="popular-tools__item__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="popular-tools__item__footer">
                <div className="popular-tools__item__wrapper-icons">
                  <div className="square">
                    <i className="fa-solid fa-heart fa-lg"></i>
                  </div>
                  <div className="square">
                    <i className="fa-sharp fa-solid fa-folder-plus fa-lg"></i>
                  </div>
                </div>
                <button className="link-btn">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <button className="load-more">Load more</button>
      </Container>
    </section>
  );
};

export default PopularTools;

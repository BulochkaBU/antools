import React from "react";
import { Container } from "react-bootstrap";
import data from "../data.json";

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
          {data.popularTools.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="tools__item">
                <div className="tools__item__wrapper-titles">
                  <img
                    className="tools__item__icon"
                    src={item.image}
                    alt="figma"
                  ></img>
                  <div className="tools__item__subheader">
                    <div className="tools__item__title">{item.title}</div>
                    <div className="tools__item__subtitle">{item.subtitle}</div>
                  </div>
                </div>
                <div className="tools__item__content">{item.description}</div>
                <div className="tools__item__footer">
                  <div className="tools__item__wrapper-icons">
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
          ))}
        </div>
        <button className="load-more">Load more</button>
      </Container>
    </section>
  );
};

export default PopularTools;

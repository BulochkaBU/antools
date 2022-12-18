import React from "react";
import { Container } from "react-bootstrap";
import data from "../data.json";

const Newcomer = () => {
  return (
    <section className="newcomer">
      <Container>
        <div className="row">
          <div className="col">
            <div className="title title_left">Newcomer Tools</div>
            <div className="subtitle subtitle_newcomer ">
              Wow! see the latest update of the most recommended tools from
              reliable designers and developers
            </div>
            <button className="main-btn main-btn_big">Explore more</button>
          </div>
          <div className="col">
            <div className="row">
              {data.newcomerTools.map((item) => (
                <div className="col" key={item.id}>
                  <div className="tools__item ">
                    <div className="tools__item__wrapper-titles">
                      <img
                        className="tools__item__icon"
                        src={item.image}
                        alt="figma"
                      ></img>
                      <div className="tools__item__subheader">
                        <div className="tools__item__title">{item.title}</div>
                        <div className="tools__item__subtitle">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="tools__item__content">
                      {item.description}
                    </div>
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newcomer;

import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../images/slide_1.png";
import quotation_marks from "../images/quotation_marks.png";

const Slider = () => {
  return (
    <section className="slider">
      <Container>
        <Carousel>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
            <img className="slider__img" src={slide_1} alt="slide_1" />
            <Carousel.Caption>
              <img
                className="img-caption"
                src={quotation_marks}
                alt="slide_1"
              />
              <div className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
            <img className="slider__img" src={slide_1} alt="slide_1" />
            <Carousel.Caption>
              <img
                className="img-caption"
                src={quotation_marks}
                alt="slide_1"
              />
              <div className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
            <img className="slider__img" src={slide_1} alt="slide_1" />
            <Carousel.Caption>
              <img
                className="img-caption"
                src={quotation_marks}
                alt="slide_1"
              />
              <div className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Slider;

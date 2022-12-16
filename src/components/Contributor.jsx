import React from "react";
import { Container, Form } from "react-bootstrap";

const Contributor = () => {
  return (
    <section className="contributor">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="title">Become a contributor?</div>
            <div className="subtitle subtitle_center">
              Join us and get tips & tricks to become a great Designer and
              Developer
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Enter your email..." />
                <button className="main-btn">Join Us</button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contributor;

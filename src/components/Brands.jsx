import React from "react";
import { Container } from "react-bootstrap";

import logos_microsoft from "../images/icons/logos_microsoft.svg";
import logos_slack from "../images/icons/logos_slack.svg";
import logos_google from "../images/icons/logos_google.svg";
import logos_wordpress from "../images/icons/logos_wordpress.svg";

const Brands = () => {
  return (
    <section className="brands">
      <Container>
        <div className="brands__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="brands__title">Trusted more than 150+ brand</div>
              <div className="brands__wrapper-icons">
                <img src={logos_microsoft} alt="logos_microsoft" />
                <img src={logos_google} alt="logos_google" />
                <img src={logos_slack} alt="logos_slack" />
                <img src={logos_wordpress} alt="logos_wordpress" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Brands;

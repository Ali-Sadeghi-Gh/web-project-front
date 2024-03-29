import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const Home = () => {
  const token = localStorage.getItem("token");
  
  var isLoggedIn = true;
  if(token == null){
    isLoggedIn = false;
  }

  var order_button = <> </>;
  if (isLoggedIn) {
    order_button = <>
      <button className="order__btn d-flex align-items-center justify-content-between ">
        <Link to="/makePizzas">
          Order
          <i className="ri-arrow-right-s-line"></i>
        </Link>
      </button>
    </>;
  }
  else {
    order_button = <>
      <button className="order__btn d-flex align-items-center justify-content-between ">
        <Link to="/Login">
          Login
          <i className="ri-arrow-right-s-line"></i>
        </Link>
      </button>
    </>;
  }

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>
                {order_button}
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

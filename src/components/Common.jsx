import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="common">
        <Container>
          <Row className="py-5 my-4 mx-2 d-flex">
            <Col sm={6}>
              <h1 className="display-4 font-weight-bolder">
                {props.text} <br />
                <strong className="text-primary">Reactive Life</strong>
              </h1>
              <p className="text-justify">
                We have a great team of 150 peoples who works only to satisfy
                our client with any kind of hardwork.We have a vast number of
                clients around the world. To know more about us
              </p>
              <Link to={props.path}>
                <a className="btn btn-primary" href="/">
                  {props.btnText}
                </a>
              </Link>
            </Col>
            <Col sm={6}>
              <img src={props.img} alt="home"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Common;

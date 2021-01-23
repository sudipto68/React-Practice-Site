import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import { Container, Row, CardDeck, Card } from "react-bootstrap";

const Caard = () => {
  return (
    <>
      <Container>
        <Row className="py-3">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <a className="btn btn-primary" href="/">
                  Learn More
                </a>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <a className="btn btn-primary" href="/">
                  Learn More
                </a>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <a className="btn btn-primary" href="/">
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </>
  );
};

export default Caard;

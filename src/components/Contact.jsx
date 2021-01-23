import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2 className="font-weight-bolder text-center mt-5 py-2 text-primary">
          Contact US
        </h2>
        <Container>
          <Row className="p-4">
            <Form className="m-auto">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="filed"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Share Your Messages</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Messages.."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;

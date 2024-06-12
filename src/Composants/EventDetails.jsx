import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/events.json';
import { Card, Col, Container, Row } from 'react-bootstrap';

const EventDetails = () => {
    const { id } = useParams();
    const eventItem = eventsData.find(event => event.id === parseInt(id));

    if (!eventItem) {
        return <div>Event not found</div>;
    }

    return (
        <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={`/images/${eventItem.img}`}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h1>{eventItem.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Description</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{eventItem.description}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Price</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{eventItem.price} DT</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};

export default EventDetails;

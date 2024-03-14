import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './HobbyItems.css';

function HobbyItems() {
  return (
    <Container fluid className="about-container">
      <Container className="about-section">
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">Synopsis:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/img-1.jpg" width="310" height="308" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">Your synopsis goes here.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">Code:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/img-2.jpg" width="286" height="382" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">Your code experience goes here.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">My Life:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/img-3.jpg" width="268" height="355.6" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">Your life experience goes here.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HobbyItems;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './HobbyItems.css';

function HobbyItems() {
  return (
    <Container fluid className="about-container">
      <Container className="about-section">
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">Soccer:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/soccer.jpg" width="310" height="308" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">I've been passionate about soccer since I first started playing at the age of 5. These days, I keep the game alive by playing recreationally, whether it's intramurals at school or competing in church tournaments across the country. My position of choice is center back, where I enjoy reading the game and anchoring the defense.
                                          Off the field, I'm an avid supporter of Liverpool FC—You'll Never Walk Alone! One of my proudest soccer moments came during my senior year of high school when I captained our team to its first league title in five years.
                                          For me, soccer is all about the thrill of competition and the camaraderie that comes with it, whether I'm playing or cheering from the sidelines.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">Skiing:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/skiing.jpg" width="286" height="382" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">I first discovered my love for skiing in 6th grade when I joined my middle school ski club. Those winters spent gliding down the slopes sparked a passion that stayed with me, even during the years I wasn't able to ski much in high school or during the pandemic.
                                          What I love most about skiing is the perfect balance between the adrenaline of racing downhill and the breathtaking scenery around me. It's a humbling reminder of the beauty of God's creation.
                                          One of my favorite skiing memories is from college, when I got to hit the slopes in Tahoe with friends. Those moments of adventure and fun are what make skiing such a meaningful part of my life.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="12">
            <h1 className="section-title">Robotics:</h1>
          </Col>
        </Row>
        <Row className="flex-row">
          <Col md="6">
            <div className="item">
              <img src="/images/robotics.jpg" width="268" height="355.6" alt="Your caption" className="image" />
              <div className="text-wrap">
                <p className="about-text">My journey into robotics began in high school when I founded my school's robotics team to explore my interests in mechanical engineering and computer science. I quickly fell in love with the problem-solving and interdisciplinary challenges robotics offers.
                                          One of my most rewarding experiences has been working with the Northeastern Mars Rover team, where I developed firmware and helped the team win first place at the CIRC competition. 
                                          Writing firmware is especially exciting to me because it's hands-on—you get to see your code come to life through hardware.
                                          Looking ahead, I'm passionate about using robotics to solve meaningful problems and make a positive impact.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HobbyItems;

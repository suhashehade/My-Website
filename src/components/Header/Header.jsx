import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Col, Row } from "reactstrap";

function Header() {
  return (
    <div className='header' id="header">
      <div className='container'>
        <Row>
          <Col md={6}>
            <div className='image'>
              <div className='img'></div>
              <div className='circle1 circle_animation'></div>
              <div className='circle2 circle_animation'></div>
            </div>
          </Col>
          <Col md={6}>
            <h1>
              <Typewriter
                key='h'
                options={{
                  strings: [
                    `Hi, I'm Suha Shehadeh a Full Stack Engineer`,
                    `SUHA : Self-assured, Unassuming, Hopeful, Ambitious`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <a href="https://drive.google.com/file/d/1PBK6gdDpr3Du6tVeM380fZ7W9m9SvrBt/view?usp=sharing" className="btn btn-brown text-pink">Download CV</a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;

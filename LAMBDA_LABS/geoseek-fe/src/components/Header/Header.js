import React,{ useEffect } from "react";

import appleWeb from '../../images/apple-icon-web.png'

import Gallery from '../Gallery/Gallery';
import Roadmap from '../Roadmap/Roadmap'; 
import Footer from '../Footer/Footer';


import { Jumbotron, Row, Col,Container} from "reactstrap";
import "./Header.css";

function Header(props) {
  useEffect(() => {
    props.setRegLogRendered(true);
  }, []);
    return (
      <Row>
       
        <Jumbotron className="header_body">
          <Col xs="12" sm="12">
            <div className="nav_container">
              <nav className="navbar navbar-default nav_container">
                <div className="container-fluid">
                  <div className="navbar-header">
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </Col>
          <Col xs="12" sm="12">
            <br />
            <br />
            <div className="header_center">
              <h1 className="display-3">Welcome to GeoSeek!</h1>
              <h4 className="lead_p">
                Explore your city in a way you have never seen before.
              </h4>
              <h4 className="lead_p">
                {" "}
                Seek out gems, create gems, and discover new activities.
              </h4>
              <a href="https://testflight.apple.com/join/qcnyqBE0" target="_blank">
                <img src={appleWeb} alt="applelogo" />
              </a>
              <h3> Download our app</h3>
            </div>
          </Col>
          
        </Jumbotron>
        <Container>
        <Gallery/>
        <h2 className="lead2 gallery_content">
          Explore our App to find more gems!
        </h2>
        <Roadmap/>
        <Footer/>
      </Container>
      </Row>
    );
  }

export default Header;

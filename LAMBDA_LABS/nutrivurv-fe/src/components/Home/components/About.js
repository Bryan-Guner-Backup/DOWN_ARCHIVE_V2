import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";
import Footer from "./LandingPage/components/Footer";

const About = () => {
  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-center py-4">
        <div>
          <h2>Our Team</h2>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around rounded mx-auto py-4 my-4 about-div">
        <div className="p-2 my-2 mx-2 pb-4 pt-4 mb-4 justify-content-center bg-light rounded about-img shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/dave-vazquez.png"
                alt="Dave Vazquez"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex flex-column justify-content-center text-center">
              <h4>Dave Vazquez</h4>
              <h6 className="font-weight-bold my-2">Team Lead / Full Stack Web Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/dave-vazquez">Github</a>
            </div>
          </div>
        </div>

        <div className=" p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded about-img  shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/alesslongaretti.png"
                alt="Alessandra Longaretti"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center flex-column text-center">
              <h4>Alessandra Longaretti</h4>
              <h6 className="font-weight-bold my-2">Full Stack Web Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/alesslongaretti">Github</a>
            </div>
          </div>
        </div>
        <div className="p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded about-img shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/taty2010.png"
                alt="Taty Novell"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center flex-column text-center">
              <h4>Taty Novell</h4>
              <h6 className="font-weight-bold my-2">Full Stack Web Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/taty2010">Github</a>
            </div>
          </div>
        </div>

        <div className=" p-2 mt-3 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded about-img  shadow">
          <div className="block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/ccsmith13.png"
                alt="Christine Smith"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center flex-column text-center">
              <h4>Christine Smith</h4>
              <h6 className="font-weight-bold my-2">Full Stack Web Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/ccsmith13">Github</a>
            </div>
          </div>
        </div>

        <div className="p-2 mt-3 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded about-img  shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/afrodo1.png"
                alt="Dominic Bridgette"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center flex-column text-center">
              <h4>Dominic Bridgette</h4>
              <h6 className="font-weight-bold my-2">Full Stack Web Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/afrodo1">Github</a>
            </div>
          </div>
        </div>

        <div className="p-2 mt-3 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded about-img  shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/dillonp23.png"
                alt="Dillon Petretti"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center flex-column text-center">
              <h4>Dillon Petretti</h4>
              <h6 className="font-weight-bold my-2">iOS Developer</h6>
            </div>
            <div className="d-flex justify-content-center">
                <i className="fa fa-github fa-large text-dark mt-1 mr-3"></i>
              <a href="https://github.com/dillonp23">Github</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

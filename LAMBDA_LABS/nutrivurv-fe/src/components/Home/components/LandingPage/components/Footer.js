import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="wave mt-5"></div>
      <footer className="page-footer bg-secondary text-light center-on-small-only">
        <div className="container">
          <div className="row pt-5 mb-3 text-center d-flex justify-content-center">
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold">
                <a href="#!">Products</a>
              </h6>
            </div>

            <div className="col-md-2 mb-3">
              <h6>
                <a href="#!">Awards</a>
              </h6>
            </div>

            <div className="col-md-2 mb-3">
              <h6>
                <a href="#!">Help</a>
              </h6>
            </div>

            <div className="col-md-2 mb-3">
              <h6>
                <a href="#!">Contact</a>
              </h6>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="d-flex justify-content-between">
              <div className="col-md-12">
                <div className="mb-4 d-flex align-center">
                  <a href="http://facebook.com" className="p-2">
                    <i className="fa fa-facebook fa-lg text-light mr-md-4"> </i>
                  </a>

                  <a href="http://twitter.com" className="p-2">
                    <i className="fa fa-twitter fa-lg text-light mx-md-4"> </i>
                  </a>

                  <a href="http://linkedin.com" className="p-2">
                    <i className="fa fa-linkedin fa-lg text-light mx-md-4"> </i>
                  </a>

                  <a href="http://instagram.com" className="p-2">
                    <i className="fa fa-instagram fa-lg text-light mx-md-4">
                      {" "}
                    </i>
                  </a>

                  <a href="http://pinterest.com" className="p-2">
                    <i className="fa fa-pinterest fa-lg text-light ml-md-4">
                      {" "}
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="p-2 mb-2">
            © 2020 Copyright -{" "}
            <Link to="https://nutrivurv.herokuapp.com/" className="text-light">
              {" "}
              Nutrivurv{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

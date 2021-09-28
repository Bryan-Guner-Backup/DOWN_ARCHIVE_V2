import React from "react";
import Community from "../../../../../assets/community.png";
import journal from "../../../../../assets/food-journal.png";
import progress from "../../../../../assets/progress.png";

const Carousel = () => {
  return (
    <>
      <h3 className="my-5 landing-text-responsive">User Dashboard</h3>
      <div
        id="demo"
        className="carousel slide mt-5 mb-5"
        data-ride="carousel"
        data-interval="8000"
      >
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={journal} alt="Journal preview" />
          </div>
          <div className="carousel-item">
            <img src={progress} alt="Progress preview" />
          </div>
          <div className="carousel-item">
            <img src={Community} alt="Community preview" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon btn-primary"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
};

export default Carousel;

import React from "react";
import { ReactComponent as Badges } from "../../../../assets/badges.svg";
import { ReactComponent as Friends } from "../../../../assets/friends.svg";
import { ReactComponent as Goals } from "../../../../assets/goals.svg";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Marketing from "./components/Marketing";

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      <Marketing />
      <div className="mt-5 pt-5 text-center">
        <h3 className="font-weight-bold text-responsive">
          You&apos;re one click away
        </h3>
        <h3 className="font-weight-bold text-responsive">
          from a healthier you.
        </h3>
        <div className="underline pt-1 mb-2 bg-warning my-5"></div>
      </div>
      <h5 className="text-center landing-text-responsive">
        Nutrivurv is here to help you stay motivated
      </h5>
      <h5 className="text-center landing-text-responsive mb-5 pb-5">
        on your journey to better health.
      </h5>
      <h3 className="text-center landing-text-responsive mb-5 pb-5">
        Features
      </h3>
      <div className="d-flex align-items-center flex-column">
        <div
          className="badges d-md-flex mx-5 pb-3"
          style={{ width: "80vw", maxWidth: "800px" }}
        >
          <div className="text-center mt-4">
            <Badges className=" img-responsive-landing " />
            <h5 className="font-weight-bold mb-5">Earn badges</h5>
          </div>
          <div className="text-center mt-4">
            <Goals className="img-responsive-landing" />
            <h5 className="font-weight-bold">Crush your goals</h5>
          </div>
          <div className="text-center mt-4">
            <Friends className="img-responsive-landing " />
            <h5 className="font-weight-bold mb-5">Connect with friends</h5>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column my-5">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

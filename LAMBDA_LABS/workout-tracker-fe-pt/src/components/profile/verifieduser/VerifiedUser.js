import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import Verified from "../../../assets/profilepage/checkmark.svg";
import {VerifiedBadge, VerifiedBadge2} from "./style";

const VerifiedUser = () => {
  const { userInfo } = useContext(ProfileContext);

  const CheckVerification = () => {
    if (userInfo.verified === true) {
      return <VerifiedBadge2 src={Verified} alt="Verified Badge Enabled" title="You are verified."/>;
    } else {
      return <VerifiedBadge src={Verified} alt="Verified Badge Disabled" title="Not verified."/>;
    }
  };
  return (
    <>
      <p> {CheckVerification()}</p>
    </>
  );
};

export default VerifiedUser;

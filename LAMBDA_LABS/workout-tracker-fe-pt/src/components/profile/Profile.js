import React, { useEffect, useState } from "react";
import NavigationBar from "../navigationbar/navigationbar";
import ProfileNav from "./profilenav/ProfileNav";
import ProfileSidebar from "./profilesidebar/ProfileSidebar";
import { decode } from "jsonwebtoken";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import ProfileContext from "../../contexts/ProfileContext";
import MobileNav from "../mobilenav/MobileNav";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [followerCount, setFollowerCount] = useState();

  const getUserInfo = () => {
    //provides the info for the specific user that is logged in.
    const { subject } = decode(localStorage.getItem("token"));
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowerCount = () => {
    const { subject } = decode(localStorage.getItem("token"));
    axiosWithAuth()
      .get(
        `https://frozen-hamlet-18508.herokuapp.com/api/follow/following/number/${subject}`
      )
      .then((res) => {
        setFollowerCount(res.data.message.length);
        console.log("follower count: ", res.data.message.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getFollowerCount();
  }, []);
  return (
    <>
      <ProfileContext.Provider value={{ userInfo, setUserInfo, followerCount, setFollowerCount }}>
        <MobileNav />
        <NavigationBar />
        <ProfileNav style={{paddingTop: '1em'}} />
        <ProfileSidebar />
      </ProfileContext.Provider>
    </>
  );
};

export default Profile;

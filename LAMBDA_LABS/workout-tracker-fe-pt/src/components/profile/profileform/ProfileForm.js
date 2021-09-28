import React, { useContext, useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import { useForm } from "react-hook-form";
import {
  ButtonMobileContainer,
  ButtonMobileIntro,
  Form,
  FormContainer,
  FormHeader,
  InnerForm,
  Input,
  Label,
  PageTitle,
} from "./style";
import { decode } from "jsonwebtoken";
import ProfileContext from "../../../contexts/ProfileContext";
const ProfileForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const [editProfile, setEditProfile] = useState({});
  const { userInfo, setUserInfo } = useContext(ProfileContext);
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

  const editProfileInfo = () => {
    //provides the info for the specific user that is logged in.
    axiosWithAuth()
      .put(`https://frozen-hamlet-18508.herokuapp.com/api/users/`, editProfile)
      .then((res) => {
        console.log("response", res.data);
        getUserInfo();
      })
      .catch((err) => {
        console.log("Profile error", err);
      })
      .finally(() => {
        setEditProfile({
          username: "",
          email: "",
          bio: ""
        })
  });
};

  const handleChange = (e) => {
    e.preventDefault();
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    editProfileInfo();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <PageTitle> Profile Information </PageTitle>
          <ButtonMobileContainer>
            <ButtonMobileIntro type="button">Cancel</ButtonMobileIntro>
            <ButtonMobileIntro type="submit">Save</ButtonMobileIntro>
          </ButtonMobileContainer>
        </FormHeader>
        <FormContainer>
          <InnerForm>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              value={editProfile.username}
              id="username"
              label="username"
              name="username"
              htmlFor="username"
              placeholder={userInfo.username}
              onChange={handleChange}
              ref={register({
                minLength: {
                  value: 2,
                  message: "username is too short",
                },
              })}
            />

            {/* NOTE: Responsible for displaying the errors */}
            {errors.username && errors.username.message}
          </InnerForm>

          <InnerForm>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              value={editProfile.email}
              id="email"
              label="email"
              name="email"
              htmlFor="email"
              placeholder={userInfo.email}
              onChange={handleChange}
              ref={register({
                minLength: {
                  value: 3,
                  message: "Bio is too short",
                },
              })}
            />

            {/* NOTE: Responsible for displaying the errors */}
            {errors.email && errors.email.message}
          </InnerForm>
        </FormContainer>
        <PageTitle> About Me </PageTitle>
        <Label htmlFor="bio">Bio</Label>
        <Input
          type="text"
          value={editProfile.bio}
          id="bio"
          label="bio"
          name="bio"
          htmlFor="bio"
          placeholder={userInfo.bio}
          onChange={handleChange}
          ref={register({
            minLength: {
              value: 3,
              message: "Bio is too short",
            },
          })}
        />

        {/* NOTE: Responsible for displaying the errors */}
        {errors.email && errors.email.message}
      </Form>
    </>
  );
};
export default ProfileForm;

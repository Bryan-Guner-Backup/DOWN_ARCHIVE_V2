import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import {
  Circles,
  Circles2,
  FormContainer,
  Logo,
  LogoContainer,
  LogoText,
  SmallCircle,
  Form,
  Input,
  RegisterText,
  SignInButton,
  SignInButtonText,
  Span,
  StyledLink,
  Title,
  Label,
  SignUpImage,
  ErrorMessages
} from "./style";
import Circle from "../../assets/loginpage/circle.svg";
import CircleSmall from "../../assets/loginpage/circlesmall.svg";
import SmFullCircle from "../../assets/loginpage/smfullsircle.svg";
import Activity from "../../assets/signuppage/activity.svg";

export default function Register() {
  const history = useHistory();

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (user, e) => {
    console.log("User details", user)
    e.preventDefault();
    axiosWithAuth()
      .post("/api/register", {
        email: user.email,
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        history.push("/login");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <LogoContainer>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
          <Circles src={Circle} />
          <Circles2 src={CircleSmall} />
          <SmallCircle src={SmFullCircle} />
        </Logo>
      </LogoContainer>
      <FormContainer>
        <SignUpImage src={Activity} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title> Sign Up </Title>
          <Label htmlFor="username" data-testid="test"> Username </Label>
          <Input
            type="text"
            name="username"
            ref={register({
              required: true,
              minLength: {
                value: 4,
                message: "Username should be at least 4 characters",
              },
            })}
          />
          <ErrorMessages>
           {errors.username && errors.username.message}
           </ErrorMessages>
          <Label htmlFor="email"> Email </Label>
          <Input
            type="text"
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email address is invalid",
              },
            })}
            />
          <ErrorMessages>
            {errors.email && errors.email.message}
          </ErrorMessages>
          <Label htmlFor="password"> Password </Label>
          <Input
            type="password"
            name="password"
            ref={register({
              required: true,
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            })}
          />
          <ErrorMessages>
            {errors.password && errors.password.message}
          </ErrorMessages>

          <SignInButton>
            <SignInButtonText type="submit" disabled={formState.isSubmitting}> Sign Up </SignInButtonText>
          </SignInButton>
          <RegisterText>
            Already have an account?
            <StyledLink to="/login">
              <Span>Sign in</Span>
            </StyledLink>
          </RegisterText>
        </Form>
      </FormContainer>
    </>
  );
}

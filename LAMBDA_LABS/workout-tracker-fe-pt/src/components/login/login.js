import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import {
  Logo,
  LogoText,
  LogoContainer,
  Title,
  FormContainer,
  Input,
  Circles,
  Label,
  Circles2,
  SignInButton,
  SignInButtonText,
  ErrorMessages,
  RegisterText,
  Span,
  StyledLink,
  LoginImage,
  Form,
  SmallCircle,
} from "./style";
import Circle from "../../assets/loginpage/circle.svg";
import CircleSmall from "../../assets/loginpage/circlesmall.svg";
import PasswordImage from "../../assets/loginpage/password.svg";
import SmFullCircle from "../../assets/loginpage/smfullsircle.svg";
export default function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });
  
  const onSubmit = (user, e) => {
    console.log("User details", user)
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div>
        <Circles src={Circle} />
        <Circles2 src={CircleSmall} />
        <SmallCircle src={SmFullCircle} />
      </div>
      <LogoContainer>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
      </LogoContainer>
      <FormContainer>
        <LoginImage src={PasswordImage} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title> Login </Title>
          <Label htmlFor="email"> Email </Label>
          <Input
            type="text"
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "The email address you've entered is invalid",
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
                message: "The password you've entered is incorrect",
              },
            })}
          />
          <ErrorMessages>
          {errors.password && errors.password.message}
          </ErrorMessages>
          <SignInButton>
            <SignInButtonText type="submit" disabled={formState.isSubmitting}> Sign In </SignInButtonText>
          </SignInButton>
          <RegisterText>
            Don't have an account?
            <StyledLink to="/register">
              <Span>Sign up</Span>
            </StyledLink>
          </RegisterText>


        </Form>
      </FormContainer>
    </>
  );
}

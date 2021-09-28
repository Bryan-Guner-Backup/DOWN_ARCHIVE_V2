import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { logIn } from '../apiStuff/axiosWithAuth'
import Header from '../header/Header'

const Login = (props) => {
  const { values, errors, touched, isSubmitting } = props

  const handleSubmit = (event) => {
    /*eslint-disable */
    const login = { email: values.email, password: values.password };
    event.preventDefault();   
    logIn(values).then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("id", res.data.user.user_id);
        window.localStorage.setItem("user_type", res.data.user.user_type);
        window.location = "/home";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formLogin">
      <Header />
      <Form onSubmit={handleSubmit} data-test="form">
        <div className="inputWrap">
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </div>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </div>
          <br />
          <button className="button" disabled={isSubmitting} data-test="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 chracters or longer")
      .required("Password is required"),
  }),
})(Login);

export default FormikLogin;

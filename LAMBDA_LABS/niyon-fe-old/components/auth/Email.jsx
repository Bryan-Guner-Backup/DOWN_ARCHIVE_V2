import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import Steps from './Steps';
import { emailSignup } from '../../redux/actions/authActions';
import Card from './Card';
import FormStyles from './Form';
import Content from './ContentWrapper';

const Email = ({ errors, touched, loading, status }) => {
  return (
    <main>
      <Steps stepNumber={0} />
      <Card>
        <Content>
          <h3>Register</h3>
          <FormStyles>
            <div className="input-wrapper">
              <Field name="username" type="text" placeholder="Username" />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </div>
            <div className="input-wrapper">
              <Field name="email" type="email" placeholder="Email" />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="input-wrapper">
              <Field name="password" type="password" placeholder="Password" />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="input-wrapper">
              <Field
                name="confirm"
                type="password"
                placeholder="Confirm Password"
              />
              {touched.confirm && errors.confirm && (
                <p className="error">{errors.confirm}</p>
              )}
            </div>

            <button type="submit">Register</button>
          </FormStyles>
          {status && (
            <p
              style={{
                margin: '5px 10px',
                textAlign: 'center',
                fontSize: '14px',
                color: 'red'
              }}
            >
              {status}
            </p>
          )}
        </Content>
      </Card>
      <BottomWrapper>
        <Link href="/auth/signup">
          <a>Sign up with social media</a>
        </Link>
      </BottomWrapper>
    </main>
  );
};

const FormikWithEmailForm = withFormik({
  mapPropsToValues({ username, email, password, confirm }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
      confirm: confirm || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, {
        message: 'Only alphanumerical characters allowed',
        excludeEmptyString: true
      })
      .required('Username is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirm: Yup.string()
      .required()
      .label('Confirm password')
      .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
      })
  }),
  handleSubmit(values, { props, setStatus }) {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password
    };
    props.emailSignup(data).then(res => {
      if (res === 201) {
        Router.push('/auth/social');
      } else {
        //still need to check the new error for already existing user
        setStatus(res);
      }
    });
  }
})(Email);

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { emailSignup }
)(FormikWithEmailForm);

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  a {
    color: #348fbb;
  }
`;

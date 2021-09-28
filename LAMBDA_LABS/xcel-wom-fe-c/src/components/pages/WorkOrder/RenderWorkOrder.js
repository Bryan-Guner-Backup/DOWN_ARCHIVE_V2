import React, { useState, useCallback } from 'react';
import NavbarWorkOrder from '../../common/NavbarWorkOrder';
import { Layout } from 'antd';
import Dropzone from 'react-dropzone';
import '../../../styles/workorder.css';
import workorderAction from '../../../state/actions/WorkorderAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const RenderWorkOrder = props => {
  const { Content } = Layout;
  const history = useHistory();
  const { userInfo, authService } = props;

  const [formValues, setFormValues] = useState({
    fullName: '',
    unit: '',
    email: '',
    date: '',
    phoneNumber: '',
    location: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.workorderAction(formValues);
    history.push('/dashboard');
  };
  return (
    <Layout className="work-order-container">
      <NavbarWorkOrder userInfo={userInfo} authService={authService} />
      <Content>
        <form onSubmit={handleSubmit} className="work-order-form">
          <label>
            Full Name:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Unit:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              required
              type="text"
              value={formValues.value}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    formSubmitted: state.workorderReducer.formSubmitted,
  };
};
export default connect(mapStateToProps, { workorderAction })(RenderWorkOrder);

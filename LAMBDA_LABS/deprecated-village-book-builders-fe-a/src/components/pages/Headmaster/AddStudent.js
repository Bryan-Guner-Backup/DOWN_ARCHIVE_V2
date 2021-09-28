import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form, Steps, Space } from 'antd';
import StudenGeneralInfo from './StudenGeneralInfo';
import StudentEducationInfo from './StudentEducationInfo';
import StudentParentInfo from './StudentParentInfo';

const { Step } = Steps;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

function AddStudent() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const onFinish = values => {
    const {
      firstName,
      lastName,
      studentEmail,
      primaryLanguage,
      dob,
      englishProficiency,
      schoolLevel,
      readingLevel,
      mathLevel,
      parentName,
      parentEmail,
    } = formData;

    if (step < 2) {
      setStep(step + 1);
    }
    if (step === 2) {
      axios
        .post('https://54.158.134.245/api/students', {
          firstName,
          lastName,
          studentEmail,
          primaryLanguage,
          dob,
          englishProficiency,
          schoolLevel,
          readingLevel,
          mathLevel,
          parentName,
          parentEmail,
        })
        .then(history.push('/dashboard'));
    }
  };

  const handleChange = changedValues => {
    setFormData({
      ...formData,
      ...changedValues,
    });
  };

  const onFinishFailed = errorInfo => {
    setError(errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <StyledDiv>
          <h1>Add Student</h1>
          <Steps current={step} onChange={step => setStep(step)}>
            <Step title="General Info" />
            <Step title="Education" />
            <Step title="Parent" />
          </Steps>
          <Space> </Space>
          <Form
            layout="vertical"
            name="addStudent"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={handleChange}
          >
            {step === 0 && <StudenGeneralInfo />}
            {step === 1 && <StudentEducationInfo />}
            {step === 2 && <StudentParentInfo />}
          </Form>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default AddStudent;

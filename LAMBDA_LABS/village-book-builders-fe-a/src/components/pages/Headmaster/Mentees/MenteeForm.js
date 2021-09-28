import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, DatePicker, Radio, Button } from 'antd';
import moment from 'moment';
import { debugLog } from '../../../../utils/debugMode';
import { editMenteeProfile } from '../../../../state/actions';
import '../../../../style.css';

const dateFormat = 'MM/DD/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const timeFormat = 'HH:mm';
const genders = ['Male', 'Female', 'Other'];

const MenteeForm = ({ currentMentee }) => {
  debugLog(
    'Prop drilled from Mentees.js',
    currentMentee,
    moment.utc(currentMentee.dob).format('dddd, MMMM Do of YYYY')
  );

  const [formData, setFormData] = useState('');
  const pathname = useHistory().location.pathname;
  const params = useParams().id;
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    debugLog(formData);
    editMenteeProfile(params, formData);
  };

  const handleChange = e => {
    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
      debugLog(moment.utc(e).format());
    } else if (e.target.name == 'gender') {
      setFormData({ ...formData, gender: genders[e.target.value] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <Form onFinish={handleSubmit} form={form} fields={formData}>
      <Form.Item
        label="First Name"
        name="first_name"
        initialValue={currentMentee.first_name}
        rules={[{ required: true, message: 'First Name is required.' }]}
      >
        <Input
          type="text"
          name="first_name"
          fields={formData.first_name}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="last_name"
        initialValue={currentMentee.last_name}
        rules={[{ required: true, message: 'Last Name is required.' }]}
      >
        <Input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={e => handleChange(e)}
        />
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[{ required: true, message: 'Date of Birth is required.' }]}
      >
        <DatePicker name="dob" onChange={e => handleChange(e)} />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        initialValue={currentMentee.email}
        rules={[{ required: true, message: 'email is required.' }]}
      >
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Primary Language"
        name="primary_language"
        initialValue={currentMentee.primary_language}
        rules={[{ required: true, message: 'Phone Number is required.' }]}
      >
        <Input
          type="text"
          name="primary_language"
          value={formData.primary_language}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Radio.Group
          name="gender"
          value={formData.gender}
          onChange={e => handleChange(e)}
        >
          <Radio value={0}>Male</Radio>
          <Radio value={1}>Female</Radio>
          <Radio value={2}>Other</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Picture URL"
        name="mentee_picture"
        initialValue={currentMentee.mentee_picture}
        rules={[{ required: true, message: 'Bio is required.' }]}
      >
        <Input
          type="text"
          name="mentee_picture"
          value={formData.mentee_picture}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="English Level"
        name="english_lvl"
        initialValue={currentMentee.english_lvl}
        rules={[{ required: true, message: 'english level is required.' }]}
      >
        <Input
          type="text"
          name="english_lvl"
          value={formData.english_lvl}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Math Level"
        name="math_lvl"
        initialValue={currentMentee.math_lvl}
        rules={[{ required: true, message: 'Math level is required.' }]}
      >
        <Input
          type="text"
          name="math_lvl"
          value={formData.math_lvl}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Reading Level"
        name="reading_lvl"
        initialValue={currentMentee.reading_lvl}
        rules={[{ required: true, message: 'reading level is required.' }]}
      >
        <Input
          type="text"
          name="reading_lvl"
          value={formData.reading_lvl}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="school Level"
        name="school_lvl"
        initialValue={currentMentee.school_lvl}
        rules={[{ required: true, message: 'school level is required.' }]}
      >
        <Input
          type="text"
          name="school_lvl"
          value={formData.school_lvl}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Academic Description"
        name="academic_description"
        initialValue={currentMentee.academic_description}
        rules={[
          {
            required: true,
            message: 'academic description level is required.',
          },
        ]}
      >
        <Input
          type="text"
          name="academic_description"
          value={formData.academic_description}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item
        label="Support Needed"
        name="support_needed"
        initialValue={currentMentee.support_needed}
        rules={[
          { required: true, message: 'Support needed level is required.' },
        ]}
      >
        <Input
          type="text"
          name="support_needed"
          value={formData.support_needed}
          onChange={e => handleChange(e)}
        />
      </Form.Item>
      <Form.Item
        label="General Availability"
        name="general_availability"
        initialValue={`From ${currentMentee.availability.as_early_as} to ${currentMentee.availability.as_late_as} in the ${currentMentee.availability.time_zone} time zone`}
        rules={[
          { required: true, message: 'General Availability is required' },
        ]}
      >
        <Input
          type="text"
          name="general_availability"
          value={formData.general_availability}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Submit</Button>
        <p>
          Fields with <span>&#42;</span> are required.
        </p>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.headmasterReducer.isLoading,
  };
};

export default connect(mapStateToProps, { editMenteeProfile })(MenteeForm);

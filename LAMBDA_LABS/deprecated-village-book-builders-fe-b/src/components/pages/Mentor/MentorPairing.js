import React, { useEffect, useState } from 'react';
import {
  fetchMentees,
  fetchMentors,
  editMatches,
  cancelMatches,
} from '../../../state/actions';
import { useSelector, connect } from 'react-redux';
import { Descriptions, Select, Button } from 'antd';
import { Popconfirm, message } from 'antd';
import { Empty } from 'antd';

import moment from 'moment';
import './MentorPairing.css';

const MentorPairing = ({
  fetchMentors,
  fetchMentees,
  editMatches,
  cancelMatches,
}) => {
  const { Option } = Select;
  const [mentor, setMentor] = useState({});
  const [mentee, setMentee] = useState({});
  const [menteeId, setMenteeId] = useState(-1);

  const state = useSelector(state => ({ ...state }));

  const { mentees } = state.menteeReducer;
  const { mentors } = state.mentorReducer;

  useEffect(() => {
    fetchMentees();
    fetchMentors();
  }, [fetchMentees, fetchMentors]);

  const availableMentor = eachMentor => {
    if (eachMentor.account_status === 'Denied') return false;
    if (eachMentor.account_status === 'Inactive') return false;
    if (eachMentor.mentee !== -1) return false;
    return true;
  };

  const matchedMentor = eachMentor => {
    if (eachMentor.account_status === 'Denied') return false;
    if (eachMentor.account_status === 'Inactive') return false;
    if (eachMentor.mentee < 0) return false;
    return true;
  };

  const availableMentee = eachMentee => {
    if (eachMentee.account_status === false) return false;
    for (let i = 0; i < mentors.length; i++) {
      if (eachMentee.id === mentors[i].mentee) return false;
    }
    return true;
  };

  const availableMentorSubjects = eachMentor =>
    eachMentor.subjects.map(eachSubject => `${eachSubject}`);

  const handleUpdate = (mentor, menteeId, mentee) => {
    editMatches(mentor, menteeId, mentee);
    fetchMentors();
    fetchMentees();
  };

  const handleCancel = (mentor, menteeInfo) => {
    cancelMatches(mentor, menteeInfo);
    fetchMentors();
    fetchMentees();
  };

  const selectMentor = () => (
    <Select
      name="mentors"
      style={{ width: '100%' }}
      placeholder="Select a mentor"
      showSearch
      optionFilterProp="children"
      onChange={value => {
        mentors.forEach(eachMentor => {
          if (eachMentor.id === value) {
            setMentor(eachMentor);
          }
        });
      }}
    >
      {mentors.filter(availableMentor).map(eachMentor => (
        <Option key={eachMentor.id} value={eachMentor.id}>
          {`${moment(eachMentor.time_slots).format(
            'MMMM Do YYYY, h:mm a'
          )} ---- ${eachMentor.first_name} ${
            eachMentor.last_name
          } ---- ${availableMentorSubjects(eachMentor)}`}
        </Option>
      ))}
    </Select>
  );

  const selectMentee = () => (
    <Select
      name="mentees"
      style={{ width: '100%' }}
      placeholder="Select a mentee"
      showSearch
      optionFilterProp="children"
      onChange={value => {
        mentees.forEach(eachMentee => {
          if (eachMentee.id === value) {
            setMentee(eachMentee);
          }
        });
        setMenteeId(value);
      }}
    >
      {mentees.filter(availableMentee).map(eachMentee => (
        <Option key={eachMentee.id} value={eachMentee.id}>{`${
          eachMentee.first_name
        } ${eachMentee.last_name} ---- ${moment(eachMentee.dob).format(
          'MMM Do YY'
        )} (DOB)`}</Option>
      ))}
    </Select>
  );

  const confirm = (eachMentor, menteeInfo) => {
    handleCancel(eachMentor, menteeInfo);
    message.success('Successfully Unmatched!');
  };

  return (
    <div className="mentor__pairing">
      <div className="pairing__box">
        <section className="mentors selection">{selectMentor()}</section>
        <section className="mentees selection">{selectMentee()}</section>
        <Button
          className="match__button"
          type="primary"
          shape="round"
          style={{ backgroundColor: '#ff914d', border: '#ff914d' }}
          onClick={() => handleUpdate(mentor, menteeId, mentee)}
        >
          Let's Match
        </Button>
      </div>
      {mentors.filter(matchedMentor).length === 0 ? (
        <Empty
          imageStyle={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200%',
            height: '50vh',
          }}
          description={false}
        ></Empty>
      ) : (
        <div className="paired">
          {mentors.filter(matchedMentor).map(eachMentor => {
            let menteeInfo = {};

            for (let i = 0; i < mentees.length; i++) {
              if (mentees[i].id === eachMentor.mentee) {
                menteeInfo = mentees[i];
              }
            }
            return (
              <div className="descriptions__container" key={eachMentor.id}>
                <hr />
                <Descriptions
                  className="descriptions"
                  title={`${moment(eachMentor.time_slots).format('MMM Do YY')}`}
                >
                  <Descriptions.Item label="Mentor">{`${eachMentor.first_name} ${eachMentor.last_name}`}</Descriptions.Item>
                  <Descriptions.Item label="Mentee">{`${menteeInfo.first_name}`}</Descriptions.Item>
                  <Descriptions.Item label="Language">{`${menteeInfo.first_language}`}</Descriptions.Item>
                  <Descriptions.Item label="Time">{`${moment(
                    eachMentor.time_slots
                  ).format('MMM Do YY')}`}</Descriptions.Item>
                </Descriptions>

                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => confirm(eachMentor, menteeInfo)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button>Cancel</Button>
                </Popconfirm>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  fetchMentees,
  fetchMentors,
  editMatches,
  cancelMatches,
})(MentorPairing);

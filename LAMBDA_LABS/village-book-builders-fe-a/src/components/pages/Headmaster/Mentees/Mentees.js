import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Input,
  Modal,
  List,
  Avatar,
  Menu,
  Dropdown,
} from 'antd';
import { connect } from 'react-redux';
import { checkToken, fetchMentees } from '../../../../state/actions/index';
import MenteeForm from './MenteeForm';
import MenteeProfile from './MenteeProfile';
import '../../../../style.css';
import Emoji from '../../../common/Emoji';
import { DownOutlined } from '@ant-design/icons';

const Mentees = props => {
  let menteesSelection = [...props.mentees];
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});
  const [filter, setFilter] = useState('last_name');

  const editingHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentee(menteeData);
      setEditing(true);
    }
  };

  const searchHandler = e => setSearch(e.target.value);
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentee(menteeData);
    }
  };

  useEffect(() => {
    props.fetchMentees();
  }, []);

  function checkMentee(mentee) {
    if (!mentee.mentorId) {
      return <Emoji symbol="🚩" label="flag" />;
    } else {
      return;
    }
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <p onClick={() => setFilter('email_address')}>Email Address</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('primary_language')}>Primary Language</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('time_zone')}>Time-zone</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('first_name')}>First Name</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('last_name')}>Last Name</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('english_lvl')}>English Level</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('math_lvl')}>Math Level</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('reading_lvl')}>Reading Level</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={() => setFilter('school_lvl')}>School Level</p>
      </Menu.Item>
    </Menu>
  );
  let ds = props.mentees;
  let holder = 'Search by Last Name';

  if (filter == 'email_address') {
    ds = props.mentees.filter(mentee => mentee.email.includes(search));
    holder = 'Search by Email Address';
  } else if (filter == 'primary_language') {
    ds = props.mentees.filter(mentee =>
      mentee.primary_language.includes(search)
    );
    holder = 'Search by Primary Language';
  } else if (filter == 'time_zone') {
    ds = props.mentees.filter(mentee =>
      mentee.availability.time_zone.includes(search)
    );
    holder = 'Search by time-zone';
  } else if (filter == 'english_lvl') {
    ds = props.mentees.filter(mentee => mentee.english_lvl.includes(search));
    holder = 'Search by English Level';
  } else if (filter == 'math_lvl') {
    ds = props.mentees.filter(mentee => mentee.math_lvl.includes(search));
    holder = 'Search by Math Level';
  } else if (filter == 'reading_lvl') {
    ds = props.mentees.filter(mentee => mentee.reading_lvl.includes(search));
    holder = 'Search by Reading Level';
  } else if (filter == 'school_lvl') {
    ds = props.mentees.filter(mentee => mentee.school_lvl.includes(search));
    holder = 'Search by School Level';
  } else {
    ds = props.mentees.filter(mentee => mentee.last_name.includes(search));
    holder = 'Search by Last Name';
  }

  return (
    <div className="menteeContainer">
      <h1 id="menteeTitle">Mentee Management</h1>
      <div className="exploreWrapper">
        <Button
          style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
          align="center"
        >
          Create New Library
        </Button>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Search By <DownOutlined />
          </a>
        </Dropdown>
        <Input.Search
          value={search}
          placeholder={holder}
          style={{ width: '80%', alignSelf: 'center' }}
          onChange={searchHandler}
        />
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={menteesSelection.filter(mentee =>
            mentee.last_name.includes(search)
          )}
          renderItem={item => (
            <List.Item>
              <div className="listItemWrapper">
                <div className="listItemMeta">
                  <List.Item.Meta
                    avatar={<Avatar src={item.mentee_picture} />}
                    title={
                      <p>
                        {item.first_name + ' ' + item.last_name}
                        {checkMentee(item)}
                      </p>
                    }
                    description={item.academic_description}
                  />
                </div>
                <div className="listItemButtonWrapper">
                  <Button
                    onClick={e => moreInfoHandler(e, item)}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    More Info
                  </Button>
                  <Button
                    onClick={e => editingHandler(e, item)}
                    className="listItemButton"
                    danger
                    size="middle"
                    type="default"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
        ,
      </div>
      <Modal
        className="menteeModal"
        visible={showModal}
        title="Mentee Profile"
        onCancel={moreInfoHandler}
        maskClosable
        destroyOnClose
        okText="Submit"
        footer={[
          <Button
            key="back"
            onClick={editing ? editingHandler : moreInfoHandler}
          >
            Return
          </Button>,
          <Button
            key="submit"
            onClick={editing ? editingHandler : moreInfoHandler}
          >
            Submit
          </Button>,
        ]}
      >
        {editing ? (
          <MenteeForm currentMentee={currentMentee} />
        ) : (
          <MenteeProfile currentMentee={currentMentee} />
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.headmasterReducer.mentees,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, { checkToken, fetchMentees })(Mentees);

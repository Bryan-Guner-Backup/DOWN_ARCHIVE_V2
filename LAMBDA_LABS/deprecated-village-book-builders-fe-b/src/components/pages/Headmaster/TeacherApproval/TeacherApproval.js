import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ComponentTitle } from '../../../common/';
import { Button } from 'antd';
import { Label, Profile } from '../../../common/ProfileStyle';

import {
  fetchPendingTeachers,
  fetchHeadmasterProfile,
  patchTeacherStatus,
  patchSchoolTeacherId,
} from '../../../../state/actions/index.js';

function TeacherApproval(props) {
  const {
    fetchHeadmasterProfile,
    fetchPendingTeachers,
    pendingTeachers,
    headMasterProfile,
  } = props;
  useEffect(() => {
    if (!pendingTeachers) {
      async function awaitProfile() {
        await fetchHeadmasterProfile(1);
        fetchPendingTeachers(headMasterProfile.schoolId);
      }
      awaitProfile();
    }
  }, [
    pendingTeachers,
    fetchHeadmasterProfile,
    fetchPendingTeachers,
    headMasterProfile,
  ]);

  function onConfirmClick(e, teacherId) {
    e.preventDefault();
    async function awaitPatch() {
      await props.patchTeacherStatus(teacherId, 'Active');
      props.fetchPendingTeachers(props.headMasterProfile.schoolId);
    }
    awaitPatch();
  }

  function onDenyClick(e, schoolId, teacherId) {
    e.preventDefault();
    async function awaitPatch() {
      await props.patchTeacherStatus(teacherId, 'Denied');
      await props.patchSchoolTeacherId(schoolId, teacherId);
      props.fetchPendingTeachers(props.headMasterProfile.schoolId);
    }
    awaitPatch();
  }

  return (
    <Profile>
      <ComponentTitle titleText="Teacher Approval" />
      <Label>Pending Teachers:</Label>
      {props.pendingTeachers.map((teacher, ind) => {
        return (
          <div key={`${teacher.id}-${ind}`}>
            <div className="teacher-container">
              {`${teacher.first_name} ${teacher.last_name}`}
              <span className="confirm-deny-container">
                <Button onClick={e => onConfirmClick(e, teacher.id)}>
                  Confirm
                </Button>
                <Button
                  onClick={e =>
                    onDenyClick(e, props.headMasterProfile.schoolId, teacher.id)
                  }
                >
                  Deny
                </Button>
              </span>
            </div>
          </div>
        );
      })}
    </Profile>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
    headMasterProfile: state.headmasterReducer.headmasterProfile,
    pendingTeachers: state.headmasterReducer.pendingTeachers,
  };
};

export default connect(mapStateToProps, {
  fetchHeadmasterProfile,
  fetchPendingTeachers,
  patchTeacherStatus,
  patchSchoolTeacherId,
})(TeacherApproval);

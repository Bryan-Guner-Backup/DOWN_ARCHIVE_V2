import React from 'react';
import { Redirect } from 'react-router-dom';
import { ClubDirectorNav, SuperAdminNav, YDPNav } from '../layout-navs';

const DashGrab = props => {
  const role = props.loggedInUser.roles[0].role.name;

  switch (role) {
    case 'SUPERADMIN':
      return <SuperAdminNav role={role} />;
    case 'CLUBDIR':
      return <ClubDirectorNav role={role} />;
    case 'YDP':
      return <YDPNav role={role} />;
    default:
      return <Redirect to="login" />;
  }
};

export default DashGrab;

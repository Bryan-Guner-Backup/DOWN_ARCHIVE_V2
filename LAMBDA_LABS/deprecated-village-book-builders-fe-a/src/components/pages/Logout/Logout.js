import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../../state/UserContext';
function Logout() {
  const user = useUser();
  const history = useHistory();
  user.setUserInfo({
    username: '',
    role: '',
    id: '',
  });
  localStorage.clear();
  return <div>{history.push('/login')}</div>;
}

export default Logout;

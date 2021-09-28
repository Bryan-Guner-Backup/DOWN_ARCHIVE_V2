import React, { useEffect, useContext, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import ConnectionRequests from '../connections/ConnectionRequests'
import { getProfile } from '../apiStuff/axiosWithAuth'
import { UserContext } from '../../UserContext'
import Map from './Map'
import ForumIcon from '@material-ui/icons/Forum'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const { user, setUser } = useContext(UserContext)
  const id = window.localStorage.getItem('id')
  /*eslint-disable */
  const [profiles, setProfiles] = useState([]);
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);
  /*eslint-disable */
  const [requests, setRequests] = useState([]);
  const [sumConnections, setSumConnections] = useState(0);
  const [sumRequests, setSumRequests] = useState(0);
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    const apiCall = async () => {
      await getProfile(id)
        .then((res) => {
          if (res) {
            setUser({ ...user, ...res.data });
            setRequests(res.data.myRequests);
            setSumConnections(res.data.myConnections.length);
            setSumRequests(res.data.myRequests.length);
            setConnections(res.data.myConnections);
          }
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  }, []);
  return (
    <div className="home" data-test="home-container">
      <Header />
      <div className="chatDiv">
        {/* change to Chat Link */}
        <Link to="/roomselect">
          <h3>Chat Now!</h3>
          <ForumIcon className="chatIcon" />
        </Link>
      </div>
      <Connections sumConnections={sumConnections} />
      <ConnectionRequests
        requests={user.myRequests}
        sumRequests={sumRequests}
      />
      <Map connections={connections} />
      <Footer value={0} />
    </div>
  );
};

export default Home;

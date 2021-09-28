import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = url => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  // const headers = getAuthHeader(authState);
  // if (!url) {
  //   throw new Error('No URL provided');
  // }
  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getBridgeData = state => {
  return axios
    .get(`${apiUrl}/bridges`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

const getHospitalData = state => {
  return axios
    .get(`${apiUrl}/hospitals`)
    .then(response => {
      return response.data;
      // console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getHospitalData,
  getBridgeData,
};

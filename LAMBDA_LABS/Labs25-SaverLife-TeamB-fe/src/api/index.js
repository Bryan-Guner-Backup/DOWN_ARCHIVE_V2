import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URI}profiles`;

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getSpending = (url, authState, userInfo) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(
      url,
      {
        user_id: `${userInfo.sub}`,
        time_period: 'month',
        graph_type: 'pie',
        color_template: 'dense',
        hole: 0.4,
      },
      { headers }
    )
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const getSpendingBar = (url, authState, userInfo) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(
      url,
      {
        user_id: `${userInfo.sub}`,
        time_period: 'week',
        graph_type: 'bar',
        color_template: 'Burg',
      },
      { headers }
    )
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const getMoneyFlow = (url, authState, userInfo) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(
      url,
      {
        user_id: `${userInfo.sub}`,
        time_period: 'week',
      },
      { headers }
    )
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const getFutureBudget = (url, authState, userInfo) => {
  var headers = getAuthHeader(authState);
  var headers = { ...headers, user_id: `${userInfo.sub}` };
  console.log(headers);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => res.data)
    .catch(err => err);
};

const postFutureBudget = (url, authState, userInfo, monthly_savings_goal) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(
      url,
      {
        user_id: `${userInfo.sub}`,
        monthly_savings_goal: `${monthly_savings_goal}`,
        placeholder: 'Shopping, Auto, Utilities',
      },
      { headers }
    )
    .then(res => res.data)
    .catch(err => err);
};

const getBudgetGoal = (url, authState, userInfo) => {
  var headers = getAuthHeader(authState);
  var headers = { ...headers, user_id: `${userInfo.sub}` };
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
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

export {
  getProfileData,
  getSpending,
  getMoneyFlow,
  getFutureBudget,
  postFutureBudget,
  getSpendingBar,
  getBudgetGoal,
};

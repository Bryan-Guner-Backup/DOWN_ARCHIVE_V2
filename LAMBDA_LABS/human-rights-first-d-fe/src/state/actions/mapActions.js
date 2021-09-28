import { ADD_MAP_DATA, ADD_MAP_LAYOUT } from '../reducers/map_reducer';
import axios from 'axios';

export const mapSelection = () => dispatch => {
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/us_map')
    .then(res => {
      // console.log('res', res.data);
      const map = JSON.parse(res.data);
      console.log('Map Actions Respone', map);
      // dispatches
      dispatch({ type: ADD_MAP_DATA, payload: map.data });
      dispatch({ type: ADD_MAP_LAYOUT, payload: map.layout });
    })
    .catch(err => {
      console.log(err);
    });
};

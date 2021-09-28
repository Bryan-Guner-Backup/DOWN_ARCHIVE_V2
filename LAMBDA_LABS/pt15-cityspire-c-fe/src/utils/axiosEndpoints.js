import { axiosWithAuth } from './axiosWithAuth';

// You need to import axiosCodes where ever you are calling axiosAPICall
// import { axiosCodes } from <path to axiosEndpoints.js>
export const axiosCodes = {
  SUCCESS: 'Success',
  ERROR: 'Error',
  GET: 'GET',
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

/* axiosAPICall is the function you call to use Axios
import { axiosAPICall } from <path to axiosEndpoints.js>

Takes the following parameters
path- path to add to base url Ex. /profiles or /favorites/idOfUser
type- one of 4 axiosCodes - GET, POST, UPDATE, DELETE
data- data to send to backend, null if none
callback- success callback
errorCallback- error callback

// Full Example where you want to call axios
    axiosAPICall(
      '/profiles', - path
      axiosCodes.GET, - axiosCode
      null, - data
      res => {
        console.log('Data: ', res); - callback for success
      },
      err => {
        console.log('Error: ', err); - callback for error
      }
    );
*/

export const axiosAPICall = (
  path,
  type,
  data = null,
  callback,
  errorCallback
) => {
  const url = process.env.REACT_APP_BACKEND_BASE_API;

  switch (type) {
    case axiosCodes.GET: {
      axiosWithAuth()
        .get(`${url}${path}`)
        .then(res => {
          if (callback != null) {
            callback({ status: axiosCodes.SUCCESS, data: res.data });
          }
        })
        .catch(err => {
          if (errorCallback != null) {
            errorCallback({ status: axiosCodes.ERROR, data: err });
          }
        });
      break;
    }
    case axiosCodes.POST: {
      axiosWithAuth()
        .post(`${url}${path}`, data)
        .then(res => {
          if (callback != null) {
            callback({ status: axiosCodes.SUCCESS, data: res.data });
          }
        })
        .catch(err => {
          if (errorCallback != null) {
            errorCallback({ status: axiosCodes.ERROR, data: err });
          }
        });
      break;
    }

    case axiosCodes.UPDATE: {
      axiosWithAuth()
        .put(`${url}${path}`, data)
        .then(res => {
          if (callback != null) {
            callback({ status: axiosCodes.SUCCESS, data: res.data });
          }
        })
        .catch(err => {
          if (errorCallback != null) {
            errorCallback({ status: axiosCodes.ERROR, data: err });
          }
        });
      break;
    }

    case axiosCodes.DELETE: {
      axiosWithAuth()
        .delete(`${url}${path}`)
        .then(res => {
          if (callback != null) {
            callback({ status: axiosCodes.SUCCESS, data: res.data });
          }
        })
        .catch(err => {
          if (errorCallback != null) {
            errorCallback({ status: axiosCodes.ERROR, data: err });
          }
        });
      break;
    }

    default: {
      return {
        status: axiosCodes.ERROR,
        data: 'Unknown error occured in axiosEndpints.js',
      };
    }
  }
};

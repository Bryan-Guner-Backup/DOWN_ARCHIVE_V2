import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = props => {
  //Any global state variables should be declared with useState here and added as a property to the state object, to then be passed in the value prop of the provider
  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    name: '',
  });
  const [savedCities, setSavedCities] = useState([]);
  //savedCities should be an array of city objects like so:
  // [{city: (str), state: (str), city_id: (str), lat: (float), lon: (float), zip: (int)}]

  let state = {
    userInfo: [userInfo, setUserInfo],
    savedCities: [savedCities, setSavedCities],
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

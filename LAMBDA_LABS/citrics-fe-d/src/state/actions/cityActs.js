import axios from 'axios';

export const getCities = (dispatch, cities) => {
  dispatch({
    type: 'GRAB_ALL_CITIES',
    payload: cities,
  });
};

// Takes in city data and grabs a new picture and summary for the city
// Then it adds all that data to state.
export const addToCurrent = async (dispatch, cityData) => {
  let formatedCityName = cityData.citynamestate.slice();

  formatedCityName = formatedCityName.replace(' ', '_');

  await axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${formatedCityName}`
    )
    .then(response => {
      cityData.wikiimgurl = response.data.items[0].srcset[2].src;
    })
    .catch(error => console.log(error));

  await axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${formatedCityName}`
    )
    .then(response => {
      cityData.summary = response.data.extract;
    })
    .catch(error => console.log(error));

  dispatch({
    type: 'ADD_TO_CURRENT_CITIES',
    payload: cityData,
  });
};

// Takes in cityId to remove and the current list of Cities.
export const removeFromCurrent = (dispatch, cityId, currentCityState) => {
  const newCurrentCities = currentCityState.filter(
    city => city.cityid !== cityId
  );

  dispatch({
    type: 'REMOVE_FROM_CURRENT_CITIES',
    payload: newCurrentCities,
  });
};

// const defaultPreferences = {
//   salary: [0, 100],
//   population: [0, 100],
//   rent: [0, 100],
//   temp: [0, 100],
// };
// Takes in preferences to set the filter to.
export const updateFilter = async (dispatch, preferences, rangeValues) => {
  console.log('preferences actions', preferences);

  let advanceSearchUrl =
    'https://labs28-d-citrics-api.herokuapp.com/cities/advancedsearch/?';

  // sal
  if (
    preferences.salary[0] !== rangeValues.salary[0] ||
    preferences.salary[1] !== rangeValues.salary[1]
  ) {
    advanceSearchUrl = advanceSearchUrl.concat(
      `salMin=${preferences.salary[0]}&`
    );
    advanceSearchUrl = advanceSearchUrl.concat(
      `salMax=${preferences.salary[1]}&`
    );
  } // pop
  if (
    preferences.population[0] !== rangeValues.population[0] ||
    preferences.population[1] !== rangeValues.population[1]
  ) {
    advanceSearchUrl = advanceSearchUrl.concat(
      `popMin=${preferences.population[0]}&`
    );
    advanceSearchUrl = advanceSearchUrl.concat(
      `popMax=${preferences.population[1]}&`
    );
  } // rent
  if (
    preferences.rent[0] !== rangeValues.rent[0] ||
    preferences.rent[1] !== rangeValues.rent[1]
  ) {
    advanceSearchUrl = advanceSearchUrl.concat(
      `rentMin=${preferences.rent[0]}&`
    );
    advanceSearchUrl = advanceSearchUrl.concat(
      `rentMax=${preferences.rent[1]}&`
    );
  } // avgTemp
  if (
    preferences.temp[0] !== rangeValues.temp[0] ||
    preferences.temp[1] !== rangeValues.temp[1]
  ) {
    advanceSearchUrl = advanceSearchUrl.concat(
      `avgTempMin=${preferences.temp[0]}&`
    );
    advanceSearchUrl = advanceSearchUrl.concat(
      `avgTempMax=${preferences.temp[1]}&`
    );
  }

  // removes the last ampersand from end of string
  const finalUrl = advanceSearchUrl.slice(0, -1);

  axios
    .get(finalUrl)
    .then(response => {
      getCities(dispatch, response.data);
      console.log('response.data', response.data);
    })
    .catch(error => console.log(error));

  dispatch({
    type: 'UPDATE_FILTER',
    payload: preferences,
  });
};
// const defaultPreferences = {
//   salary: [0, 100],
//   population: [0, 100],
//   rent: [0, 100],
//   temp: [0, 100],
// };
export const updateFilterRange = dispatch => {
  axios
    .get(
      'https://labs28-d-citrics-api.herokuapp.com/cities/advancedsearch/minmax'
    )
    .then(response => {
      dispatch({
        type: 'UPDATE_RANGE_FILTER',
        payload: {
          salary: [response.data.salaryMin, response.data.salaryMax],
          population: [
            response.data.populationMin,
            response.data.populationMax,
          ],
          rent: [response.data.rentMin, response.data.rentMax],
          temp: [response.data.avgTempMin, response.data.avgTempMax],
        },
      });
    })
    .catch(error => console.log(error));
};
export const toggleSearch = dispatch => {
  dispatch({
    type: 'TOGGLE_SEARCH',
  });
};

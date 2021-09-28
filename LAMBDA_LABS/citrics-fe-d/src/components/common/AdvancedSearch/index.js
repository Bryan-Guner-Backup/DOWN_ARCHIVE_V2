import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import RangeSlider from './RangeSlider';
import AdvancedSearchDiv from './style';
import store from '../../../state';
import {
  updateFilter,
  updateFilterRange,
} from '../../../state/actions/cityActs';

function AdvancedSearch(props) {
  const { register, watch } = useForm();
  const { filter, rangeFilter, setDisplayAdvanced } = props;
  const [preferences, setPreferences] = useState(filter);
  const { dispatch } = store;

  // changes preferences in global state and grabs new list of filtered cities
  const onSubmit = () => {
    updateFilter(dispatch, preferences, rangeFilter);
  };
  console.log('preferences', preferences);

  // checks to see if sliders should be enabled or not
  const salary = watch('salaryCheckbox');
  const population = watch('populationCheckbox');
  const rent = watch('rentCheckbox');
  const temp = watch('tempCheckbox');

  // handles changes to preferences
  const updatePreferences = (data, name) => {
    setPreferences({ ...preferences, [`${name}`]: data });
  };

  // first render grabs the values for the range
  useEffect(() => {
    updateFilterRange(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setPreferences(filter);
  }, [filter, setPreferences]);

  useEffect(() => {
    updateFilter(dispatch, rangeFilter, filter);
  }, [dispatch, rangeFilter]);

  return (
    <AdvancedSearchDiv>
      <form>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="salaryCheckbox"
              type="checkbox"
              ref={register}
            />
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Salary
          </label>
          <div className="advancedSearchSlider">
            {preferences.salary[0]}
            <RangeSlider
              disabled={!salary}
              name={'salary'}
              value={[rangeFilter.salary[0], rangeFilter.salary[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.salary[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="populationCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Population
          </label>
          <div className="advancedSearchSlider">
            {preferences.population[0]}
            <RangeSlider
              disabled={!population}
              name={'population'}
              value={[rangeFilter.population[0], rangeFilter.population[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.population[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="rentCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Rental Prices
          </label>
          <div className="advancedSearchSlider">
            {preferences.rent[0]}
            <RangeSlider
              disabled={!rent}
              name={'rent'}
              value={[rangeFilter.rent[0], rangeFilter.rent[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.rent[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="tempCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Average Temperature
          </label>
          <div className="advancedSearchSlider">
            {preferences.temp[0].toFixed(1)}
            <RangeSlider
              disabled={!temp}
              name={'temp'}
              value={[rangeFilter.temp[0], rangeFilter.temp[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.temp[1].toFixed(1)}
          </div>
        </div>
        <div className="advancedSearchField">
          <button type="button" onClick={onSubmit}>
            Apply Filters
          </button>
          <div
            id="closeAdvancedSearchButton"
            onClick={() => setDisplayAdvanced(false)}
          >
            Close
          </div>
        </div>
      </form>
    </AdvancedSearchDiv>
  );
}

const mapStateToProps = state => {
  return {
    rangeFilter: state.rangeFilter,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, {})(AdvancedSearch);

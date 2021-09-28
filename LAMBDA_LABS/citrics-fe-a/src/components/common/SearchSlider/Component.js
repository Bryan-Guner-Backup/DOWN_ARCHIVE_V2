import React from 'react';
import { Slider } from 'antd';
import PropTypes from 'prop-types';

const SearchSlider = props => {
  return (
    <Slider
      autoFocus={props.autoFocus}
      max={props.max}
      min={props.min}
      range={props.range}
    />
  );
};

export default SearchSlider;

SearchSlider.propTypes = {
  autoFocus: PropTypes.bool,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  range: PropTypes.bool,
};

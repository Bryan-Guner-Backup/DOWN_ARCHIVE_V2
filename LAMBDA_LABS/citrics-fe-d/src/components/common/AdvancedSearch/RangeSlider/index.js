/* eslint react/no-multi-comp: 0, max-len: 0 */

import 'rc-slider/assets/index.css';
import React from 'react';
import { Range } from 'rc-slider';

const handleStyleObj = {
  backgroundColor: '#d3553f',
  height: '30px',
  borderRadius: '35%',
  alignItems: 'center',
  borderColor: '#d3553f',
  marginTop: '-13px',
};
const disabledStyle = {
  borderColor: '#e9e9e9',
  backgroundColor: '#e9e9e9',
  height: '30px',
  borderRadius: '35%',
  alignItems: 'center',
  marginTop: '-13px',
};

export default function RangeSlider({
  disabled,
  name,
  updatePreferences,
  value,
}) {
  return (
    <div>
      <Range
        // Depending on the state of disabled the styles of the range slider will change
        trackStyle={[
          disabled
            ? { backgroundColor: '#afafaf' }
            : { backgroundColor: '#d3553f' },
        ]}
        handleStyle={[
          disabled ? disabledStyle : handleStyleObj,
          disabled ? disabledStyle : handleStyleObj,
        ]}
        allowCross={true}
        disabled={disabled}
        defaultValue={[value[0], value[1]]}
        min={value[0]}
        max={value[1]}
        onChange={data => {
          console.log(data);
          updatePreferences(data, name);
        }}
      />
    </div>
  );
}

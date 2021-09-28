import React from 'react';
import styles from './styles.js';
import { useSelector } from 'react-redux';
import { Slider } from 'antd';

// This code is currently unused because the search by criteria feature is still under development
export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div
      className="search-container"
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
    </div>
  );
};

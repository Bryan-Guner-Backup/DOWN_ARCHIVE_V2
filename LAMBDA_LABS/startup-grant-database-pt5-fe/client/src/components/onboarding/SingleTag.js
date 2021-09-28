import React from 'react';
import Chip from '@material-ui/core/Chip';

const SingleChip = ({ data, handleSelected, classes, label, style }) => {
  return (
    <Chip
      label={label}
      onClick={handleSelected(data.id)}
      className={classes.chip}
      color={style}
    />
  );
};

export default SingleChip;

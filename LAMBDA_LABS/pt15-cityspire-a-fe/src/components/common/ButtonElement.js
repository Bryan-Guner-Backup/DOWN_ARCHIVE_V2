import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonElement = props => {
  // Here is a button for use when simply in need of a button that doesn't require to be wrapped in a form.
  // contains a click property for your use onClick
  return (
    <Button
      onClick={props.handleClick}
      disabled={props.isDisabled}
      className={props.classType || 'primary'}
    >
      {props.buttonText}
    </Button>
  );
};

export default ButtonElement;

ButtonElement.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.string,
  handleClick: PropTypes.func,
};

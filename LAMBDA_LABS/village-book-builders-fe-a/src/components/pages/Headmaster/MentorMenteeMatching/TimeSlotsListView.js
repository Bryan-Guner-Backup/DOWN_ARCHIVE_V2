import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../../../state/actions/index';
import {
  StyledComponent,
  StyledDateCard,
  StyledVerticalBox,
  StyledHeader,
  StyledArrays,
  StyledButton,
} from './StyledComponents';
import { useHistory } from 'react-router-dom';

const TimeSlotsListView = props => {
  const { fetchTimeSlots } = props;

  const history = useHistory();

  const schedule = e => {
    history.push('/mentor-mentee-matching');
  };

  useEffect(() => {
    fetchTimeSlots();
  }, [fetchTimeSlots]);

  return (
    <div className="container">
      <h2>Time Slots</h2>
      <StyledComponent>
        {props.timeSlots.map(timeSlot => (
          <StyledDateCard>
            <StyledHeader>{timeSlot.day}</StyledHeader>
            <StyledVerticalBox>
              <h4>Time</h4>
              <StyledArrays>{timeSlot.time}</StyledArrays>
            </StyledVerticalBox>
            <StyledVerticalBox>
              <h4>Booked</h4>
              <StyledArrays> {timeSlot.assigned}</StyledArrays>
            </StyledVerticalBox>
            <StyledVerticalBox>
              <h4>Edit</h4>
              <StyledArrays>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
                <StyledButton onClick={schedule}>edit</StyledButton>
              </StyledArrays>
            </StyledVerticalBox>
          </StyledDateCard>
        ))}
      </StyledComponent>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.headmasterReducer.isLoading,
    timeSlots: state.headmasterReducer.timeSlots,
  };
};

export default connect(mapStateToProps, { fetchTimeSlots })(TimeSlotsListView);

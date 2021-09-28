import axiosWithAuth from '../../utils/axiosWithAuth';

export const STRIPE_PAYMENT_START = 'STRIPE_PAYMENT_START';
export const STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR';
export const STRIPE_PAYMENT_SUCCESSFUL = 'STRIPE_PAYMENT_SUCCESSFUL';
export const SAVE_DATE = 'SAVE_DATE';
export const SAVE_SELECT = 'SAVE_SELECT';
export const SAVE_COACH = 'SAVE_COACH';
export const SAVE_RESCHEDULED_COACH = 'SAVE_RESCHEDULED_COACH';
export const BOOK_APPOINTMENT_START = 'BOOK_APPOINTMENT_START';
export const BOOK_APPOINTMENT_ERROR = 'BOOK_APPOINTMENT_ERROR';
export const BOOK_APPOINTMENT_SUCCESSFUL =
  'BOOK_APPOINTMENT_SUCCESSFUL';
export const RESCHEDULE_APPOINTMENT_START =
  'RESCHEDULE_APPOINTMENT_START';
export const RESCHEDULE_APPOINTMENT_ERROR =
  'RESCHEDULE_APPOINTMENT_ERROR';
export const RESCHEDULE_APPOINTMENT_SUCCESSFUL =
  'RESCHEDULE_APPOINTMENT_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const handleStripePayment = (
  token,
  title,
  price,
  success,
  error,
  bookAppointment,
  coach,
  user,
  date,
  topic_id,
  length_id,
  props,
  closeMessage,
) => async dispatch => {
  dispatch({ type: STRIPE_PAYMENT_START });

  const product = {
    name: title,
    price,
  };

  const response = await axiosWithAuth().post(
    `${url}payment/stripe`,
    {
      token,
      product,
    },
  );
  const { status } = response.data;
  if (status === 'success') {
    success();
    bookAppointment(
      coach,
      user,
      date,
      topic_id,
      length_id,
      props,
      closeMessage,
    );
    dispatch({ type: STRIPE_PAYMENT_SUCCESSFUL });
  } else {
    error();
    dispatch({ type: STRIPE_PAYMENT_SUCCESSFUL });
  }
};

export const saveDate = date => {
  return { type: SAVE_DATE, payload: date };
};

export const saveSelect = event => {
  return { type: SAVE_SELECT, payload: event };
};

export const saveCoach = coach => {
  return { type: SAVE_COACH, payload: coach };
};
export const saveRescheduledCoach = rescheduledCoach => {
  return { type: SAVE_RESCHEDULED_COACH, payload: rescheduledCoach };
};

export const bookAppointment = (
  coach,
  student,
  appointment_datetime,
  topic_id,
  length_id,
  props,
  closeMessage,
) => dispatch => {
  dispatch({ type: BOOK_APPOINTMENT_START });
  const appointment = {
    coach_id: coach.id,
    student_id: student.id,
    topic_id,
    length_id,
    appointment_datetime,
  };
  axiosWithAuth()
    .post(`${url}appointment`, appointment)
    .then(res => {
      setTimeout(() => {
        closeMessage();
        props.history.push('/dashboard');
        dispatch({
          type: BOOK_APPOINTMENT_SUCCESSFUL,
        });
      }, 2000);

      const coach_email = {
        email: coach.email,
        text: `Hello ${coach.first_name} ${coach.last_name},
        you have a new appointment for the date: ${appointment_datetime},
        please get in touch with ${student.first_name} ${student.last_name} if you can't 
        make it at the date. The email adress from your coach is: ${student.email}`,
        subject: 'Quality Hub appointment',
      };

      return axiosWithAuth()
        .post(`${url}appointment/email`, coach_email)
        .then(res => {
          const student_email = {
            email: student.email,
            text: `Hello ${student.first_name} ${student.last_name},
            you have a new appointment for the date: ${appointment_datetime},
            please get in touch with ${coach.first_name} ${coach.last_name} if you can't 
            make it at the date. The email adress from your coach is: ${coach.email}`,
            subject: 'Quality Hub appointment',
          };

          return axiosWithAuth()
            .post(`${url}appointment/email`, student_email)
            .then(res => {})
            .catch(err => {
              dispatch({
                type: BOOK_APPOINTMENT_ERROR,
                payload: err,
              });
            });
        })
        .catch(err => {
          dispatch({ type: BOOK_APPOINTMENT_ERROR, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: BOOK_APPOINTMENT_ERROR, payload: err });
    });
};

export const rescheduleAppointment = (
  rescheduler,
  user,
  appointment_datetime,
  topic_id,
  length_id,
  props,
  showSuccess,
  showError,
  closeMessage,
) => dispatch => {
  dispatch({ type: RESCHEDULE_APPOINTMENT_START });
  const appointment = {
    coach_id: rescheduler.coach_id,
    student_id: rescheduler.student_id,
    topic_id,
    length_id,
    appointment_datetime,
  };

  const coach = {
    email: user.role_id === 2 ? user.email : rescheduler.email,
    first_name:
      user.role_id === 2 ? user.first_name : rescheduler.first_name,
    last_name:
      user.role_id === 2 ? user.last_name : rescheduler.last_name,
  };

  const student = {
    email: user.role_id === 1 ? user.email : rescheduler.email,
    first_name:
      user.role_id === 1 ? user.first_name : rescheduler.first_name,
    last_name:
      user.role_id === 1 ? user.last_name : rescheduler.last_name,
  };

  axiosWithAuth()
    .post(`${url}appointment`, appointment)
    .then(res => {
      showSuccess();
      setTimeout(() => {
        closeMessage();
        props.history.push('/dashboard');
        dispatch({
          type: BOOK_APPOINTMENT_SUCCESSFUL,
        });
      }, 2000);

      const coach_email = {
        email: coach.email,
        text: `Hello ${coach.first_name} ${coach.last_name},
          your initial appointment with ${student.first_name} ${student.last_name} has been resheduled for ${appointment_datetime},
          please get in touch with ${student.first_name} ${student.last_name} if you can't 
          make it at the date. Their email address is: ${student.email}`,
        subject: 'Quality Hub appointment',
      };

      return axiosWithAuth()
        .post(`${url}appointment/email`, coach_email)
        .then(res => {
          const student_email = {
            email: student.email,
            text: `Hello ${student.first_name} ${student.last_name},
              you have successfully resheduled your appointment for the date: ${appointment_datetime}`,
            subject: 'Quality Hub appointment',
          };

          return axiosWithAuth()
            .post(`${url}appointment/email`, student_email)
            .then(res => {
              dispatch({
                type: RESCHEDULE_APPOINTMENT_SUCCESSFUL,
                payload: res.data.appointments,
              });
            })
            .catch(err => {
              dispatch({
                type: RESCHEDULE_APPOINTMENT_ERROR,
                payload: err,
              });
            });
        })
        .catch(err => {
          dispatch({
            type: RESCHEDULE_APPOINTMENT_ERROR,
            payload: err,
          });
        });
    })
    .catch(err => {
      showError();
      setTimeout(() => closeMessage(), 5000);
      dispatch({ type: RESCHEDULE_APPOINTMENT_ERROR, payload: err });
    });
};

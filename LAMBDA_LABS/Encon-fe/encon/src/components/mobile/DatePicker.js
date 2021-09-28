import React, { useState } from "react";
import Calendar from "react-calendar";
import { render } from "react-dom";
import "../../styles/mobile/DatePicker.scss";
// import "react-calendar/dist/Calendar.css";

export const DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  console.log(props);

  const onChange = (date) => {
    setDate(date);
  };

  const liftDateState = () => {
    const liftDate = date;
    props.todaysDate(liftDate);
  };

  return (
    <>
      <Calendar className={"calendar"} onChange={onChange} value={date} />
    </>
  );
};

render(<DatePicker />, document.querySelector("#root"));

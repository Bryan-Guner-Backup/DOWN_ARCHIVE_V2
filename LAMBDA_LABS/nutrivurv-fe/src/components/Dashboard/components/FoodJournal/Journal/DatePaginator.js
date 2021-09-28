import moment from "moment";
import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../../../../assets/left-arrow-button.svg";
import { ReactComponent as RightArrow } from "../../../../../assets/right-arrow-button.svg";

const DatePaginator = (props) => {
  const [date, setDate] = useState(1);
  const [fwdDate, setFwdDate] = useState(0);

  let backDateArray = [];
  let forwardDateArray = [];
  let a = moment();

  const backDate = () => {
    let b = moment("2010-08-07");
    for (let m = a; m.isAfter(b); m.subtract(1, "day")) {
      backDateArray.push(m.format("YYYY-MM-DD"));
    }

    for (let i = 0; i < backDateArray.length; i++) {
      if (date === i) {
        setDate(date + 1);
        props.setStartDate(backDateArray[i]);
      }
    }
  };

  const forwardDate = () => {
    let b = moment(props.startDate);
    for (let m = b; m.isBefore(a); m.add(1, "day")) {
      forwardDateArray.push(m.format("YYYY-MM-DD"));
    }
    for (let i = 0; i < forwardDateArray.length; i++) {
      if (date > i) {
        setDate(date - 1);
        props.setStartDate(forwardDateArray[1]);
      }
    }
    if (fwdDate === forwardDateArray.length) {
      setFwdDate(0);
    }
  };

  return (
    <div className="">
      <LeftArrow
        className="mr-3"
        onClick={backDate}
        value={props.startDate}
        type="hover"
      />
      <input
        className="border-0 text-center"
        type="date"
        value={moment(props.startDate).format("YYYY-MM-DD")}
        onChange={(e) => props.setStartDate(e.target.value)}
      />
      <RightArrow className="ml-3" onClick={forwardDate} type="hover" />
    </div>
  );
};

export default DatePaginator;

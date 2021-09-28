import React, { useState } from "react";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return <div className="calendar-container"></div>;
}

export default CalendarPage;

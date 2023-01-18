import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = (props) => {
  const [selectedDate, setSelectedDate] = useState([
    new Date(2023, 1, 11),
    new Date(2023, 1, 16),
  ]);
  const [date, setDate] = useState([
    new Date(2023, 0, 2),
    new Date(2023, 0, 15),
  ]);

  const bookedDates = [new Date('2023-01-29'), new Date('2023-01-30')];
  const availableDates = [new Date('2023-01-4'), new Date('2023-01-28'), new Date('2023-01-28')];
  const [activeDate, setActiveDate] = useState(new Date());

  const handleActiveDateChange = (date) => {
    setActiveDate(date);
  }

  const disabledDates = [new Date('2023-01-26'), new Date('2023-01-27')];


  return (
    <Calendar
      onChange={setDate}
      selectRange={true}
      defaultValue={date}
      onActiveDateChange={handleActiveDateChange}
      tileClassName={({date}) => {
        if(bookedDates.some(bookedDate =>
          date.getFullYear() === bookedDate.getFullYear() &&
          date.getMonth() === bookedDate.getMonth() &&
          date.getDate() === bookedDate.getDate()
        )){
          return 'booked';
        } else if(availableDates.some(availableDate =>
          date.getFullYear() === availableDate.getFullYear() &&
          date.getMonth() === availableDate.getMonth() &&
          date.getDate() === availableDate.getDate()
        )) {
          return 'available'
        }
      }}
      tileDisabled={({date, view}) =>
      (view === 'month') && // Block day tiles only
      disabledDates.some(disabledDate =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
      )}
    />
  );
};

export default MyCalendar;

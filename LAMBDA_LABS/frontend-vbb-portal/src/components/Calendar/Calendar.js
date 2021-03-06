import {
  React, 
  useState,
  useEffect,
} from 'react';
import {
  Calendar,
  dateFnsLocalizer,
} from 'react-big-calendar';
import 'react-big-calendar/lib/addons/dragAndDrop/';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import {
  events,
  resourceMap,
} from './data';
import {
  customWeekViewEvent,
  customResourceViewEvent,
} from './CustomEvent';
import Toolbar from './ResourcesToolbar';
import ComputersList from './assign-computers/computers-list';
import CheckinModal from './CheckinModal';
import EventListSideBar from './EventListSideBar';

import '../../less/calendar.less';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const TheCalendar = withDragAndDrop(Calendar);

let components = {
  toolbar: Toolbar,
  week: {
    event: customWeekViewEvent,
  },
  day: {
    event: customResourceViewEvent,
  },
};

const MyCalendar = () => {
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [allEvents, setAllEvents] = useState(events);
  const [showWeekView, setShowWeekView] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);
  const [dragSelected, setDragSelected] = useState({
    start: '',
    end: '',
    mentor: '',
    student: '',
    resourceId: 0,
  });

  const [clickSelected, setClickSelected] = useState({
    id: 0,
    start: '',
    end: '',
    mentor: '',
    student: '',
    resourceId: 0,
    title: '',
    eventStatus: false,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [selectLocation, setSelectLocation] = useState('');

  const handleDragStart = (event) => {
    setDraggedEvent(event);
  };
  const dragFromOutsideItem = () => {
    return draggedEvent;
  };
  const onDropFromOutside = ({ start, end, allDay }) => {
    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay,
    };
    setDraggedEvent(null);
    moveEvent({ event, start, end });
  };

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const deriveAllDayStatus = ({ allDay }) => {
      if (!event.allDay && droppedOnAllDaySlot) return true;
      else if (event.allDay && !droppedOnAllDaySlot) return false;
      else return allDay;
    };

    const allDay = deriveAllDayStatus({ allDay: event.allDay });

    setAllEvents((oldEvents) => (
      oldEvents.map((existingEvent) => (
        existingEvent.id === event.id
          ? { ...existingEvent, start, end, allDay }
          : existingEvent
      ))
    ));
  };

  const resizeEvent = ({ event, start, end }) => {
    setAllEvents((oldEvents) => (
      oldEvents.map((existingEvent) => (existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
      ))
    ));
  };

  const handleDragSelect = ({ start, end }) => {
    setDragSelected({
      ...dragSelected,
      start: start,
      end: end,
    });
    setShowCalendar(!showCalendar);
  };

  const handleEventClick = (e) => {
    if (showWeekView) {
      setDragSelected({
        ...dragSelected,
        id: e.id,
        start: e.start,
        end: e.end,
        mentor: e.mentor,
        student: e.student,
        resourceId: e.resourceId,
        location: e.location
      });
      setShowCalendar(!showCalendar);
    }
    else {
      setClickSelected(e);
      showModal();
    }
  };

  const filterEventsByLocation = (location) => {
    if (location === '') {
      setAllEvents(events);
    } else {
      const filteredEvents = events.filter((e) => e.location === location);
      setAllEvents(filteredEvents);
    }
  };
  
  const dayStart = new Date(Date.UTC(0, 0, 0, 12, 0, 0));
  const dayEnd = new Date(Date.UTC(0, 0, 0, 22, 0, 0));

  useEffect(() => {
    filterEventsByLocation(selectLocation);
  }, [selectLocation]);

  return (
    <div className="calendarWrapperDiv" id="section-to-print">
      <CheckinModal
        details={{ ...clickSelected }}
        isModalVisible={isModalVisible}
        setEvents={setAllEvents}
        setIsModalVisible={setIsModalVisible}
        setClickSelected={setClickSelected}
      />
      <EventListSideBar
        showModal={showModal}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setClickSelected={setClickSelected}
        setSelectLocation={setSelectLocation}
        selectLocation={selectLocation}
        events={allEvents}
      />
      <div className="calendar-container">
        {/* if showCalendar is true, we give them the default, else we show the scheduler */}
        {showCalendar ? (
          <Calendar
            selectable
            localizer={localizer}
            popup={true}
            min={dayStart}
            max={dayEnd}
            onView={() => {
              setShowWeekView(!showWeekView);
            }}
            // onSelectEvent={handleSelectEvent}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            views={{
              week: true,
              day: true,
            }}
            components={components}
            resources={showWeekView === true ? null : resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            timeslots={1}
            defaultView="week"
            onSelectSlot={handleDragSelect}
            onSelectEvent={handleEventClick}
            onEventDrop={moveEvent}
            resizable
            onEventResize={resizeEvent}
            dragFromOutsideItem={
              displayDragItemInCell ? dragFromOutsideItem : null
            }
            onDropFromOutside={onDropFromOutside}
            handleDragStart={handleDragStart}
          />
        ) : (
          <ComputersList
            setShowWeekView={setShowWeekView}
            dragSelected={dragSelected}
            setShowCalendar={setShowCalendar}
            showCalendar={showCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default MyCalendar;

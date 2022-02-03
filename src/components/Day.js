import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_EVENT, SHOW_EVENT_MODAL } from "../redux/event/eventAction";
import { SET_CURRENT_DAY } from "../redux/currentData/monthAction";

const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);

  const dispatcher = useDispatch();

  const selectedDay = useSelector((state) => state.month.currentDay);
  const events = useSelector((state) => state.event.eventArr);
  const selectedEvent = useSelector((state) => state.selectEvent.selectedEvent)

  useEffect(() => {
    const eventsDay = events.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(eventsDay);
  }, [events, day]);

  const isCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  const handleClick = () => {

    console.log(selectedEvent);
    dispatcher({
      type: SHOW_EVENT_MODAL,
      payload: { isVisible: true },
    });
    dispatcher({
      type: SET_CURRENT_DAY,
      payload: { selectedDay: day },
    });
  };

  const handleEvent = (event) => {
      dispatcher({
          type: SELECT_EVENT,
          payload: {selectedEvent: event}
      })
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 flex flex-col cursor-pointer"
    >
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${isCurrentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
      {dayEvents.map((evt, idx) => (
        <div
          onClick={() => handleEvent(evt)}
          key={idx}
          className={`bg-blue-500 p-1 mr-3 text-sm rounded mb-1 truncate`}
        >
          {evt.title}
        </div>
      ))}
    </div>
  );
};

export default Day;

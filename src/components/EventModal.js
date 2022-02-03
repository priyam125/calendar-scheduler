import React, { useEffect, useState } from "react";
import {
  AiOutlineBars,
  AiOutlineClockCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";

import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_EVENT,
  DELETE_EVENT,
  HIDE_EVENT_MODAL,
  SELECT_EVENT,
  SHOW_EVENT_MODAL,
  UPDATE_EVENT,
} from "../redux/event/eventAction";

const EventModal = () => {
  const dispatcher = useDispatch();

  const daySelected = useSelector((state) => state.month.currentDay);
  const selectedEvent = useSelector((state) => state.selectEvent.selectedEvent);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.title : ""
  );

  const handleClose = () => {
    dispatcher({
      type: HIDE_EVENT_MODAL,
      payload: { isVisible: false },
    });

    dispatcher({
      type: SELECT_EVENT,
      payload: { selectedEvent: null },
    });

    // console.log(selectedEvent);
  };

  const handleDelte = () => {
    dispatcher({
      type: DELETE_EVENT,
      payload: { event: selectedEvent },
    });

    dispatcher({
      type: SHOW_EVENT_MODAL,
      payload: false,
    });

    dispatcher({
      type: SELECT_EVENT,
      payload: { selectedEvent: null },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };

    if (selectedEvent) {
      dispatcher({
        type: UPDATE_EVENT,
        payload: { updatedEvent: calendarEvent },
      });

      dispatcher({
        type: SELECT_EVENT,
        payload: { selectedEvent: null },
      });
    } else {
      dispatcher({
        type: ADD_EVENT,
        payload: { event: calendarEvent },
      });
    }

    dispatcher({
      type: HIDE_EVENT_MODAL,
      payload: { isVisible: false },
    });
  };

  useEffect(() => {
    console.log(selectedEvent);
    console.log(daySelected);
  }, []);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <AiOutlineBars className="text-gray-400 cursor-pointer" />
          <div className="flex">
            <AiOutlineDelete
              onClick={handleDelte}
              className="h-4 w-4 mr-2 cursor-pointer"
            />
            <IoMdClose
              onClick={handleClose}
              className="text-gray-400 cursor-pointer h-4 w-4"
            />
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <AiOutlineClockCircle />
              <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>

            <div className="flex items-center space-x-2">
              <MdOutlineDescription />
              <input
                type="text"
                name="description"
                placeholder="Add a description"
                value={description}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            {selectedEvent ? 'Update' :'Save' }
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;

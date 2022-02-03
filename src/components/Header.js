import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NEXT_MONTH, PREV_MONTH } from "../redux/currentData/monthAction";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight, BsChevronRight } from "react-icons/bi";
import dayjs from "dayjs";

const Header = () => {

    const currentMonthIdx = useSelector(state => state.month.currentMonthIdx)
    // console.log(currentMonthIdx);

    const dispatcher = useDispatch()   
    
    const handleNext = () => {
        dispatcher({
            type: NEXT_MONTH,
        })
    }

    const handlePrev = () => {
        dispatcher({
            type: PREV_MONTH,
        })
    }

  return (
    <div className="flex flex-col py-2">
      <header className="px-14 py-2 flex items-center">
        <BsCalendar2Minus className="mr-2 w-8 h-8" />
        <h1 className="mr-10 text-xl font-bold">Calendar</h1>
      </header>
      <div className="flex px-6 items-center">
        <button onClick={handlePrev}>
          <BiChevronLeft className="rounded cursor-pointer text-gray-600 mx-2" />
        </button>
        <button className="border rounded py-2 px-4">
        {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
          "MMMM YYYY"
        )}
        </button>
        <button onClick={handleNext}>
          <BiChevronRight className="cursor-pointer text-gray-600 mx-2" />
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
      </h2>
      </div>
    </div>
  );
};

export default Header;

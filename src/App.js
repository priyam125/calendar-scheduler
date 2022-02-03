import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import EventModal from "./components/EventModal";
import { getMonth } from "./util";
import dayjs from "dayjs";

const App = () => {
  const currentMonthIdx = useSelector((state) => state.month.currentMonthIdx);
  const isVisible = useSelector((state) => state.event.isVisible);
  const event = useSelector((state) => state.event.eventArr);
  const selectedEvent = useSelector((state) => state.selectEvent.selectedEvent);

  // console.log(getMonth());
  // console.log(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // const test = () => {
  //   currentMonth.map((row, i ) => {
  //     return (
  //       <div key={i}>
  //         {row.map((day,idx) => {
  //           console.log(day);
  //           return (
  //             <div>New</div>
  //           )
  //         })}
  //       </div>
  //     )
  //   })
  // }

  useEffect(() => {
    // console.log(currentMonth);
    console.log(selectedEvent);
    console.log(dayjs().month());
    const mon = getMonth();
    // console.log(mon);
  }, []);

  useEffect(() => {
    console.log(event);
  }, [event]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  return (
    <React.Fragment>
      {isVisible && <EventModal />}
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 px-8">
          <Month currentMonth={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

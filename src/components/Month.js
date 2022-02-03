import React from 'react';
import Day from './Day';

const Month = ({currentMonth}) => {
  return (
      <div className='flex-1 grid grid-cols-7'>
       {currentMonth.map((row, index) =>{ 
        //    console.log(row);
           return (
           <React.Fragment key={index}>
            {row.map((day, idx ) => (
                <Day day={day} key={idx} rowIdx={index}/>
            ))}
           </React.Fragment>
       )})}
      </div>
      
      )
};

export default Month;

import React, { useState } from 'react'
import CalendarNavigator from './CalendarNavigator'
import Calendar from './Calendar'
import { DateTime } from 'luxon'
import getWeeksOfCurrentMonth from '../dateUtilities/dateUtils'

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.now())
  const weeks = getWeeksOfCurrentMonth(currentDate)

  function handleNextMonthChange(){
    setCurrentDate(prev => {
       let date = prev
       date = currentDate.plus({ month: 1 })
       return date
    })
  }

  function handlePreviousMonthChange(){
    setCurrentDate(prev => {
       let date = prev
       date = currentDate.minus({ month: 1 })
       return date
    })
  }

  return (
    <div className='w-[90vw] h-[90vh] flex flex-col items-center gap-5'>
        <CalendarNavigator handleNextMonthChange={handleNextMonthChange} 
                           handlePreviousMonthChange={handlePreviousMonthChange}
                           currentDate={currentDate} />
        <Calendar weeks={weeks} />
    </div>
  )
}

export default CalendarContainer


import React from 'react'
import CalendarNavigator from './CalendarNavigator'
import Calendar from './Calendar'

const CalendarContainer = () => {
  return (
    <div className='w-[90vw] h-[90vh] flex flex-col items-center gap-5'>
        <CalendarNavigator />
        <Calendar />
    </div>
  )
}

export default CalendarContainer


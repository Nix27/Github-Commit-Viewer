import React from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'

const Calendar = () => {
  return (
    <div className='w-full h-[90vh] bg-darker-gray rounded-[3.375rem]'>
        <CalendarHeader />
        <Month />
    </div>
  )
}

export default Calendar
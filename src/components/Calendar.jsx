import React from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'

const Calendar = ({ weeks }) => (
  <div className='w-full h-[90vh] bg-darker-gray rounded-[3.375rem]'>
      <CalendarHeader />
      <Month weeks={weeks} />
  </div>
)

export default Calendar

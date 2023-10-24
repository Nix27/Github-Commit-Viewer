import React from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import { DateTime } from 'luxon'

const Calendar = () => {
  return (
    <div className='w-full h-[90vh] bg-darker-gray rounded-[3.375rem]'>
        <CalendarHeader />
        <Month monthYear={monthYear} />
    </div>
  )
}

export default Calendar

const currentDate = DateTime.now()
const month = currentDate.month
const year = currentDate.year
const monthYear = DateTime.local(year, month)

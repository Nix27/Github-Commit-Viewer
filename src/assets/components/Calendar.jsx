import React from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import { DateTime } from 'luxon'

const Calendar = () => {
  const weeks = getWeeksOfCurrentMonth(DateTime.now())

  return (
    <div className='w-full h-[90vh] bg-darker-gray rounded-[3.375rem]'>
        <CalendarHeader />
        <Month weeks={weeks} />
    </div>
  )
}

export default Calendar

const getWeeksOfCurrentMonth = (currentDate) => {
  const firstDay = DateTime.local(currentDate.year, currentDate.month, 1).weekday
  let numberOfDays = currentDate.daysInMonth
  
  const numberOfDaysInFirstWeek = 7 - (firstDay - 1)
  
  let weeks = []
  
  weeks.push(getWeek(numberOfDaysInFirstWeek, 1))
  numberOfDays = numberOfDays - numberOfDaysInFirstWeek
  let startDayOfWeek = numberOfDaysInFirstWeek + 1
  
  while(numberOfDays > 0){
      if(numberOfDays >= 7){
        weeks.push(getWeek(7, startDayOfWeek))
        numberOfDays -= 7
        startDayOfWeek += 7
      }else{
        weeks.push(getWeek(numberOfDays, startDayOfWeek))
        numberOfDays = 0
      }
  }
  
  function getWeek(numberOfDays, startDateOfWeek){
     const lastDateOfWeek = (startDateOfWeek + numberOfDays) - 1; 
  
     return Array.from({length: (lastDateOfWeek - startDateOfWeek) + 1}, (value, index) => startDateOfWeek + index)
  }

  return weeks
}

import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const CalendarNavigator = ({ handleNextMonthChange, handlePreviousMonthChange, currentDate }) => (
  <div className='w-[90%] lg:w-[20%] flex justify-between text-primary-orange text-[1.3rem] items-center'>
      <FaChevronLeft onClick={() => handlePreviousMonthChange()} className='transition-all hover:scale-125' />
      <p>{currentDate.monthLong} {currentDate.year}</p>
      <FaChevronRight onClick={() => (handleNextMonthChange())} className='transition-all hover:scale-125' />
  </div>
)

export default CalendarNavigator
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const CalendarNavigator = () => {
  return (
    <div className='w-[20%] flex justify-between text-primary-orange text-[1.3rem] items-center'>
        <FaChevronLeft />
        <p>January 2023</p>
        <FaChevronRight />
    </div>
  )
}

export default CalendarNavigator
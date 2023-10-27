import React from 'react'

const CalendarHeader = () => (
  <div className='bg-dark rounded-[3.375rem]'>
      <ul className='grid grid-cols-7 text-center'>
          {days.map(day => (
              <li key={crypto.randomUUID()} className='text-primary-orange text-[1.1rem] font-bold py-5'>{day}</li>
          ))}
      </ul>
  </div>
)

export default CalendarHeader

const days = [
    'Mo', 
    'Tu', 
    'We', 
    'Th', 
    'Fr', 
    'Sa', 
    'Su'
]
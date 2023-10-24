import React from 'react'

const CalendarHeader = () => {
  return (
    <div className='bg-dark rounded-[3.375rem]'>
        <ul className='grid grid-cols-7 text-center'>
            {days.map(day => (
                <li key={crypto.randomUUID()} className='text-primary-orange text-[1.2rem] font-bold py-5'>{day}</li>
            ))}
        </ul>
    </div>
  )
}

export default CalendarHeader

const days = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
]
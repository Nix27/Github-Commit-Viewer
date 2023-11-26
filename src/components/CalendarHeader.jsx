import React from 'react'

const CalendarHeader = () => (
  <div className='bg-dark rounded-[3.375rem]'>
      <ul className='grid grid-cols-7 text-center'>
          {days.map(day => (
              <li key={day.id} className='text-primary-orange text-[1.1rem] font-bold py-5'>{day.day}</li>
          ))}
      </ul>
  </div>
)

export default CalendarHeader

const days = [
    {
        id: crypto.randomUUID(),
        day: 'Mo'
    },
    {
        id: crypto.randomUUID(),
        day: 'Tu'
    }, 
    {
        id: crypto.randomUUID(),
        day: 'We'
    }, 
    {
        id: crypto.randomUUID(),
        day: 'Th'
    }, 
    {
        id: crypto.randomUUID(),
        day: 'Fr'
    }, 
    {
        id: crypto.randomUUID(),
        day: 'Sa'
    }, 
    {
        id: crypto.randomUUID(),
        day: 'Su'
    }
]
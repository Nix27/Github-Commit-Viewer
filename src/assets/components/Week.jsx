import React from 'react'
import Day from './Day'

const Week = ({ days }) => {
  return (
    <div className=''>
        <ul className='grid grid-cols-7 gap-5'>
            {days.map((day, index) => (
                <li key={crypto.randomUUID()} className=''>
                    <Day day={day} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Week
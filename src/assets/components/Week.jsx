import React from 'react'
import Day from './Day'

const Week = ({ days }) => {
  return (
    <div className='w-auto'>
        <ul className={`grid grid-cols-7 gap-5`}>
            {days.map(day => (
                <li key={crypto.randomUUID()}>
                    <Day day={day} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Week
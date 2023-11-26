import React from 'react'
import Day from './Day'

const Week = ({ days, isFirstWeek }) => {
  let daysOfWeek = [...days];

  if(isFirstWeek){
    daysOfWeek = setEmptyDays(daysOfWeek)
  }

  return (
    <div className='w-auto'>
        <ul className={`grid grid-cols-7 gap-5`}>
            {daysOfWeek.map(day => (
                <li key={crypto.randomUUID()}>
                    {day && <Day day={day} />}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Week

function setEmptyDays(days){
  const numberOfEmpty = 7 - days.length
  const daysWithEmpty = new Array(numberOfEmpty)

  return [...daysWithEmpty, ...days];
}
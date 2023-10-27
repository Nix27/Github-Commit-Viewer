import React from 'react'
import Day from './Day'

const Week = ({ days, isFirstWeek }) => {
  let daysOfWeek = [...days];

  if(isFirstWeek){
    daysOfWeek = setEmptyDays(days.length, days)
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

function setEmptyDays(numberOfDays, days){
  const numberOfEmpty = 7 - numberOfDays
  const daysWithEmpty = [...days]

  for(let i = 0; i < numberOfEmpty; i++) {
      daysWithEmpty.unshift(null)
  }

  return daysWithEmpty
}
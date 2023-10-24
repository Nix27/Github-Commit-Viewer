import React from 'react'
import Week from './Week'

const Month = ({ monthYear }) => {
  const numberOfDays = monthYear.daysInMonth
  const numberOfWeeks = Math.ceil(numberOfDays / 7)

  return (
    <div className='grid grid-flow-row gap-5 px-5 mt-5'>
        {dates.map(d => (
            <Week key={crypto.randomUUID()} />
        ))}
    </div>
  )
}

export default Month
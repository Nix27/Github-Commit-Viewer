import React from 'react'
import CommitInfoContainer from './CommitInfoContainer'

const Day = ({ day }) => {
  return (
    <div className='flex flex-col p-2 h-[70px] border-t-2 border-primary-orange'>
        <p className='text-primary-orange'>{day.day}</p>
        {day.commitsInDay[0] !== undefined && <CommitInfoContainer commitsInDay={day.commitsInDay[0]} />}
    </div>
  )
}

export default Day
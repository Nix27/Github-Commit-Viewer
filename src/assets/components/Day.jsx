import React from 'react'
import CommitInfoContainer from './CommitInfo'
import { DateTime } from 'luxon'

const Day = ({ day }) => (
  <div className={`flex flex-col p-2 h-[75px] text-[0.7rem] border-t-2 border-primary-orange`}>
      <p className='text-primary-orange'>{day.day}</p>
      {day.commitsInDay[0] !== undefined && <CommitInfoContainer commit={day.commitsInDay[0]} />}
  </div>
)

export default Day
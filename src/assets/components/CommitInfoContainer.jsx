import React from 'react'
import { DateTime } from 'luxon'

const CommitInfoContainer = ({ commitsInDay }) => {
  return (
    <div className='bg-dark flex flex-col p-2 text-primary-orange rounded-[2rem]'>
        <p>{commitsInDay.name}</p>
        <p>{commitsInDay.date.hour}:{commitsInDay.date.minute}</p>
    </div>
  )
}

export default CommitInfoContainer
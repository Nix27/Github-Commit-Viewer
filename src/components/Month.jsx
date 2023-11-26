import React from 'react'
import Week from './Week'

const Month = ({ weeks }) => (
  <div className='grid grid-flow-row gap-5 px-5 mt-5'>
      {weeks.map((week, index) => (
          <Week key={crypto.randomUUID()} days={week} isFirstWeek={index===0} />
      ))}
  </div>
)

export default Month
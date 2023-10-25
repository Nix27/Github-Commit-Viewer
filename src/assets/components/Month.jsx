import React from 'react'
import Week from './Week'

const Month = ({ weeks }) => {

  return (
    <div className='grid grid-flow-row gap-5 px-5 mt-5'>
        {weeks.map(week => (
            <Week key={crypto.randomUUID()} days={week} />
        ))}
    </div>
  )
}

export default Month
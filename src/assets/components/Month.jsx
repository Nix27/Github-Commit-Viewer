import React from 'react'
import Week from './Week'

const Month = () => {
  return (
    <div className='grid grid-flow-row gap-5 px-5 mt-5'>
        {dates.map(d => (
            <Week key={crypto.randomUUID()} />
        ))}
    </div>
  )
}

export default Month
import React from 'react'
import Day from './Day'

const Week = () => {
  return (
    <div className=''>
        <ul className='grid grid-cols-7 gap-5'>
            {dates.map(d => (
                <li key={crypto.randomUUID()}>
                    <Day />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Week
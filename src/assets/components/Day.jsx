import React from 'react'

const Day = ({ day }) => {
  return (
    <div className='flex flex-col p-2 border-t-2 border-primary-orange'>
        <p className='text-primary-orange'>{day}</p>
    </div>
  )
}

export default Day
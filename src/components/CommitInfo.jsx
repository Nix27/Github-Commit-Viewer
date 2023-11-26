import React, { useState } from 'react'
import { DateTime } from 'luxon'
import CommitDetails from './CommitDetails'

const CommitInfoContainer = ({ commits }) => {
  const [toggleDetails, setToggleDetails] = useState(false)

  function handleToogleDetails(){
    setToggleDetails(prev => !prev)
  }

  return (
    <>
    <div className='bg-dark flex flex-col items-center py-1 px-5 text-primary-orange rounded-[2rem] cursor-pointer transition-all hover:scale-95'
         onClick={() => handleToogleDetails()}>
        <p>{commits[0].message.length <= 10 ? commits[0].message : commits[0].message.substring(0, 10)}...</p>
        <p>{commits[0].date.toFormat('HH:mm')}</p>
    </div>
    {toggleDetails && <CommitDetails commitsDetails={commits} handleToogleDetails={handleToogleDetails} />}
    </>
  )
}

export default CommitInfoContainer
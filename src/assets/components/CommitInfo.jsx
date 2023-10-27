import React, { useState } from 'react'
import { DateTime } from 'luxon'
import CommitDetails from './CommitDetails'

const CommitInfoContainer = ({ commit }) => {
  const [toggleDetails, setToggleDetails] = useState(false)

  function handleToogleDetails(){
    setToggleDetails(prev => !prev)
  }

  return (
    <>
    <div className='bg-dark flex flex-col items-center py-1 px-5 text-primary-orange rounded-[2rem] cursor-pointer transition-all hover:scale-95'
         onClick={() => handleToogleDetails()}>
        <p>{commit.message.length <= 10 ? commit.message : commit.message.substring(0, 10)}...</p>
        <p>{commit.date.toFormat('HH:mm')}</p>
    </div>
    {toggleDetails && <CommitDetails commitDetails={commit} handleToogleDetails={handleToogleDetails} />}
    </>
  )
}

export default CommitInfoContainer
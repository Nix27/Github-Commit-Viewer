import React from 'react'
import { DateTime } from 'luxon'

const CommitDetails = ({ commitDetails, handleToogleDetails }) => (
  <div className='bg-transparent-dark absolute top-0 left-0 z-10 w-[100vw] h-[100vh]'>
      <div className='bg-primary-gray absolute text-[1rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[70%] md:w-[80%] lg:w-[30%] h-[40%] py-2 px-5 flex flex-col justify-center text-primary-orange'>
          <span className='text-primary-orange font-bold absolute top-[10px] right-[30px] text-[1.5rem] cursor-pointer transition-all hover:scale-110'
                onClick={handleToogleDetails}>X</span>
          <p>Author: {commitDetails.name}</p>
          <p>E-mail: {commitDetails.email}</p>
          <p>Date: {commitDetails.date.toFormat('dd-MM-yyyy HH:mm')}</p>
          <p>Message: {commitDetails.message}</p>
      </div>
  </div>
)

export default CommitDetails
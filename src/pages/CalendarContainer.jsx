import React, { useEffect, useState } from 'react'
import CalendarNavigator from '../components/CalendarNavigator'
import Calendar from '../components/Calendar'
import { DateTime } from 'luxon'
import getWeeksWithCommits from '../data/weekCommitUtils'
import getDateFromUrlOrDefault from '../data/urlUtils'
import { useNavigate, useParams } from 'react-router-dom'

const CalendarContainer = () => {
  const { dateParameter } = useParams()
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(() => {
    return getDateFromUrlOrDefault(dateParameter)
  })
  const [weeks, setWeeks] = useState([])
  
  useEffect(() => {
    const weeksWithCommitsPromise = getWeeksWithCommits(currentDate)

    weeksWithCommitsPromise .then(res => setWeeks(res))
                            .catch(err => console.log(err))

    navigate(`/${currentDate.toFormat('yyyy-MM-dd')}`)
  }, [currentDate])

  function handleNextMonthChange(){
    setCurrentDate(prev => {
       let date = prev
       date = currentDate.plus({ month: 1 })
       return date
    })
  }

  function handlePreviousMonthChange(){
    setCurrentDate(prev => {
       let date = prev
       date = currentDate.minus({ month: 1 })
       return date
    })
  }

  return (
    <div className='w-[90vw] h-[90vh] flex flex-col items-center gap-5'>
        <CalendarNavigator handleNextMonthChange={handleNextMonthChange} 
                           handlePreviousMonthChange={handlePreviousMonthChange}
                           currentDate={currentDate} />
        <Calendar weeks={weeks} />
    </div>
  )
}

export default CalendarContainer


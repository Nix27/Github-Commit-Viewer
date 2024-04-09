import React, { useEffect, useRef, useState } from 'react'
import CalendarNavigator from '../components/CalendarNavigator'
import SearchDialog from '../components/SearchDialog'
import Calendar from '../components/Calendar'
import { DateTime } from 'luxon'
import getWeeksWithCommits from '../data/weekCommitUtils'
import getDateFromUrlOrDefault from '../data/urlUtils'
import { useNavigate, useParams } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const CalendarContainer = () => {
  const { dateParameter } = useParams()
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(() => {
    return getDateFromUrlOrDefault(dateParameter)
  })
  const [weeks, setWeeks] = useState([])
  const [toogleSearch, setToogleSearch] = useState(false)
  const [repoData, setRepoData] = useState(null)
  const [error, setError] = useState(null)

  const isSubmited = useRef(false)
  
  useEffect(() => {
    const owner = repoData ? repoData.owner : 'Nix27';
    const repository = repoData ? repoData.repository : 'RWA_Projekt_VideoStreaming';

    const weeksWithCommitsPromise = getWeeksWithCommits(currentDate, owner, repository, isSubmited.current);

    weeksWithCommitsPromise .then(res => {
                              if(!isSubmited.current){
                                setWeeks(res)
                              }
                            })
                            .then(() => {
                              if(isSubmited.current){
                                isSubmited.current = false
                                setError('')
                                setCurrentDate(DateTime.fromISO(sessionStorage.getItem('startDateOfCommits')))
                              }
                            })
                            .catch(err => {
                              console.log(err)
                              setError(err)
                            })

    navigate(`/${currentDate.toFormat('yyyy-MM-dd')}`)
  }, [currentDate, repoData])

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

  function handleToogleSearch(){
    setToogleSearch(prev => !prev)
  }

  function handleSubmit(owner, repository){
    setRepoData({
      owner: owner,
      repository: repository
    })
    isSubmited.current = true
  }

  return (
    <div className='w-[90vw] h-[90vh] flex flex-col items-center gap-5'>
        <button className='absolute right-10 lg:right-24 text-primary-orange text-[1.2rem] transition-all hover:text-[1.3rem]'
          onClick={() => handleToogleSearch()}><FaSearch /></button>

        {error ? <p className='text-primary-orange text-[1.5rem]'>Repository not found!</p> : 
                 <>
                    <CalendarNavigator handleNextMonthChange={handleNextMonthChange} 
                           handlePreviousMonthChange={handlePreviousMonthChange}
                           currentDate={currentDate} />
                    <Calendar weeks={weeks} />
                 </>
        }
        
        {toogleSearch && <SearchDialog handleToogleSearch={handleToogleSearch} handleSubmit={handleSubmit} />}
    </div>
  )
}

export default CalendarContainer
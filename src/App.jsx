import React from 'react'
import CalendarContainer from './pages/CalendarContainer'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CalendarContainer />} />
          <Route path='/:dateParameter?' element={<CalendarContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'

const SearchDialog = ({ handleToogleSearch, handleSubmit }) => {
  return (
    <div className='bg-transparent-dark absolute top-0 left-0 z-10 w-[100vw] h-[100vh]'>
      <div className='bg-primary-gray absolute text-[1rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[70%] md:w-[80%] lg:w-[30%] h-[40%] py-2 px-5 flex flex-col justify-center items-center text-primary-orange'>
        <button className='text-primary-orange font-bold absolute top-[10px] right-[30px] text-[1.5rem] cursor-pointer transition-all hover:scale-110 z-[10]'
                onClick={handleToogleSearch}>X</button>
        <h1 className='text-primary-orange text-[1.5rem] mb-3'>Repository info</h1>
        <form className='flex flex-col items-center w-full' onSubmit={e => {
            e.preventDefault()
            handleToogleSearch()
            handleSubmit(e.target.elements.owner.value, e.target.elements.repository.value)
        }}>
            <label htmlFor='owner'>Username of repository owner:</label>
            <input type='text' id='owner' name='owner' autoFocus required className='focus:outline-none placeholder-opacity-50 placeholder-blue-gray-200 bg-transparent-dark text-center rounded-[5px] px-1 py-2 w-full mb-2' placeholder='Nix27...' />
            <label htmlFor='repository'>Repository name:</label>
            <input type='text' id='repository' name='repository' required className='focus:outline-none placeholder-opacity-50 placeholder-blue-gray-200 bg-transparent-dark rounded-[5px] text-center px-1 py-2 w-full mb-5' placeholder='RWA_Projekt_VideoStreaming...' />
            <button type='submit' className='text-primary-orange bg-transparent-dark w-[50%] rounded-[10px] py-1 transition-all hover:scale-105'>Find</button>
        </form>
      </div>
    </div>
  )
}

export default SearchDialog
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Former({cityName,setCityName,setNum,num,setUrl}) {
  return (
    <form onSubmit={(e)=>{
     e.preventDefault()
     console.log(cityName)
     setNum(num + 1 )
     setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c0b1b5ca935e5fcbeadf830d907350ea`)
     setCityName('')
    }} className='flex mt-24 flex-col justify-center w-screen text-center text-2xl z-50'>
     <label className='flex flex-col'>
     <span className='font-extrabold text-5xl mb-10'>where?</span>
     <div className='flex items-center text-center justify-center'>
         <input value={cityName} onInput={(e)=>setCityName(e.target.value)} type="text" className='bg-blue-700 text-yellow-300 p-2 rounded-3xl shadow-2xl placeholder:text-lg ' placeholder='write a city & press search'/>
        <button> 
          <FontAwesomeIcon icon={faSearch} className='text-lg ml-5 w-10 border h-5 p-2 rounded-full hover:bg-blue-700 transition-all duration-500 cursor-pointer' />
        </button>
     </div>
    
     </label>
    </form>
  )
}

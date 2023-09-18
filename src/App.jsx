
import { useState } from 'react'
import './App.css'
import Former from './components/Former'
import Navbar from './components/Navbar'
import useFetch from './components/useFetch'

function App() {  
  const [cityName,setCityName] = useState('tehran')
  const [url,setUrl] =  useState(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c0b1b5ca935e5fcbeadf830d907350ea`)
   
   const [num,setNum] = useState(1)

  const {temp,condition,userCity,isLoading} =  useFetch(url,cityName)
  
  return (
    <div className='bg-blue-500 w-screen h-screen text-yellow-200'>
     <Navbar/>
     <div className='flex flex-col text-center'>
     <h1 className='text-yellow-300 mt-10 mb-5 z-10 font-extrabold shadow-2xl  text-2xl '>welcome to weather app</h1>
      <p className='text-yellow-100 text-lg font-extrabold  z-10'>we can help you to know about each cities weather</p>
     </div>
     <div>
     <Former cityName={cityName} setCityName={setCityName} num={num} setNum={setNum} setUrl={setUrl}/>
     </div>
     {isLoading ? <h1 className='font-extrabold text-3xl justify-center flex mt-10'>Loading...</h1> :     
      <div className='w-screen h-96 flex justify-center mt-10'>
      <div className='text-center  h-1/2 w-2/3 flex flex-col'>
        <h1 className='font-extrabold text-3xl '>{userCity}</h1>
        <h2 className='text-blue-800 mb-2  font-semibold'>temperature : <span>{Math.round(temp / 10)}</span> </h2>
        <div className='flex  justify-between mt-2 items-center text-center'>
          {condition==="Clouds" && <img src='cloudy.png' className='w-16'/>}
          {condition==="Rain" && <img src='rainy.png' className=' w-16'/>}
          {condition==="Clear" && <img src='sunny1.png' className='w-16'/>}
          <h1 className='font-extrabold text-lg text-blue-700'>{condition}</h1>
        </div>
      </div>
     </div>}

        
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'

export default function useFetch(url,cityName) {
    const [temp,setTemp] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [condition,setCondition] = useState()
    const [userCity,setUserCity] = useState('')
    useEffect(()=>{
    async function fetchMyData(){
       setIsLoading(true)
      const res = await fetch(url)     
      

      const data = await res.json()
      setTemp(data.main.temp)
      setCondition(data.weather[0].main)
      setUserCity(data.name)
      setIsLoading(false)
      
    }
    fetchMyData()
    
    },[cityName,url])
   
    return {temp,condition,userCity,isLoading}
}

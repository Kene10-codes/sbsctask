import React, { useEffect, useState } from 'react'
import axios from "axios"

const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = `eff96c23553a979b9e7a25ca095d8a95`

const Home = () => {
 const [longitude, setLongitude] = useState("")
 const [latitude, setLatitude] = useState("")
 const [userLocation, setUserLocation] = useState("")

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
    })

    const finalApiResponse = `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    axios.get(finalApiResponse)
    .then(response => {
      setUserLocation(response.data.name)
    })
  })
  return (
    <div>
      <br />
      <h2>Home Page</h2>
      <br />
      <p>My Location: {userLocation}</p>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import Featured from '../../components/navbar/featured/Featured';
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import List from "../../components/list/List"
import axios from "axios"






const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null);



  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre" + genre : ""}}`, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDRiYTNmZDc5MjUwOTViNjljYmFiMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgxMjA3OTAsImV4cCI6MTY1ODU1Mjc5MH0.5V22opBo2ILLD9raq1R-9gQ4A3TaEH9t0I0-IT3HDYU"
            }
          }
        )
        console.log(res)
        setLists(res.data)

      } catch (err) {
        console.log(err)
      }
    }
  },[type, genre])




  return (
    <div className="home">
        <Navbar/>
        <Featured type={type}/>
        <List/>
      


        


    </div>
  )
}

export default Home
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'
import { Cart } from '../components/Cart'
import { Carousel } from '../components/Carousel'

export const Dashboard = () => {

  const [songs, setSongs] = useState([])
  // theaudiodb.com/api/v1/json/523532/mostloved.php?format=track
  useEffect(()=>{
    fetch(`https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track`)
    .then(response => response.json())
    .then(json => setSongs(json.loved))
  }, [])

  console.log(songs)

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Content'>
        <Navbar /> 
        <Carousel />
        <SongList songs={songs}/>
      </div>

      <div className='Cart-Section'>
        <Cart />
      </div>
    </div>
  ) 
}
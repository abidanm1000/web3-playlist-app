import React, {useEffect, useState} from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'
import { Cart } from '../components/Cart'

export const Dashboard = () => {

  const [songs, setSongs] = useState([])
  
  useEffect(()=>{
    fetch(`https://theaudiodb.com/api/v1/json/523532/mvid.php?i=112024`)
    .then(response => response.json())
    .then(json => setSongs(json.mvids))
  }, [])

  console.log(songs)

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Content'>
        <Navbar /> 
        development branch
        <SongList songs={songs}/>
      </div>

      <div className='Cart-Section'>
        <Cart />
      </div>
    </div>
  ) 
}
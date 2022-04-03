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
  
  // console.log(songs[0].strTrack)
  // for(let i = 0; i < songs.length; i++) {
  //   console.log(songs[i])
  // }

  

  console.log(songs)
  // console.log(songs.forEach(song => song.idAlbum))
  // let songIds
  // songs.map(song => console.log(song))
  // console.log(songIds)


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
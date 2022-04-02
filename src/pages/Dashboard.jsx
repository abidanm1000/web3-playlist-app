import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'

export const Dashboard = () => {
  
  fetch(`https://theaudiodb.com/api/v1/json/523532/mvid.php?i=112024`)
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Content'>
      <Navbar /> 
      developement branch
        
        <SongList />
      </div>
    </div>
  ) 
}
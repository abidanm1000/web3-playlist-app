import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'


export const Dashboard = () => {


  return (
   
    <div className='Dashboard'>
    
      <div className='Sidebar'>
        <Sidebar />
      </div>

      <div className='Content'>
        <Navbar /> 
        
        <SongList />
      </div>
    </div>
  ) 
}



import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { SongList } from '../components/SongList'

export const Profile = () => {
  
  return (
    <div className="profile-content">

      <div className='profile-sidebar'>
        <Sidebar />
      </div>

        <div className='profile-info'>
          <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQctLok4OFZ62gLhEncinKUDIT-Y0mhOwhiaUqU64mJfKFMzHWg1tptNfJbZenKYPG4eY&usqp=CAU' alt="profile" />
          <h1 className="profile-name">Welcome back, Prodigy!</h1>
          <p className="profile-stats">10 Tracks | 2 Playlists</p>
      </div>

      <div className="profile-songs">

      </div>

    </div>
  )
}

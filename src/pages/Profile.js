import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { SongList } from '../components/SongList'

export const Profile = () => {
  
  return (
    <div className="Profile">

      <div className='Sidebar'>
        <Sidebar />
      </div>

      <div className="profile-content">

        <div className='profile-info'>
          <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQctLok4OFZ62gLhEncinKUDIT-Y0mhOwhiaUqU64mJfKFMzHWg1tptNfJbZenKYPG4eY&usqp=CAU' alt="profile" />
          <h1 className="profile-name">Metamask address</h1>
        </div>

        <SongList />

      </div>
    </div>
  )
}

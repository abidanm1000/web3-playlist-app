import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { ProfileSongList } from '../components/ProfileSongList'

export const Profile = () => {

  let defaultProfile = "https://ca.slack-edge.com/T02MA26UL8P-U02Q08UP40K-ba393d9a62b5-512"

  return (
    <div className="profile-content">

      <div className='profile-sidebar'>
        <Sidebar />
      </div>

      <div className="profile-header">

      </div>

      <div className="profile-info">

        <img id="profile-img" src={defaultProfile} alt="profile" />

        <h1 className="profile-name">Welcome back, <span>Hassam!</span></h1>

        <div className="profile-stats">
          <div className="stats">
            <h4><span>20</span> Tracks</h4>
          </div>

          <div className="stats">
            <h4><span>2</span> Playlists</h4>
          </div>
        </div>

      </div>

      <div className="profile-songs">
        <ProfileSongList />
      </div>

    </div>
  )
}

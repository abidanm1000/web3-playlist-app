import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { ProfileSongList } from '../components/ProfileSongList'

export const Profile = () => {

  let defaultProfile = "https://ca.slack-edge.com/T02MA26UL8P-U02Q08UP40K-ba393d9a62b5-512"

  // const [profileImg, setProfileImg] = useState(null)

  // const imgSelectHandler = (e) => {
  //   setProfileImg(e.target.files[0])
  // }

  // const imgUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', profileImg, profileImg.name)
  //   axios.post('gs://music-marketplace-a0438.appspot.com', fd)
  //   .then(res => {
  //     console.log(res)
  //   })
  // }



  return (
    <div className="profile-content">

      <div className='profile-sidebar'>
        <Sidebar />
      </div>

      <div className="profile-header">

      </div>

      <div className="profile-info">
        {/* <input type="file" onChange={imgSelectHandler} /> */}
        <img id="profile-img" src={defaultProfile} alt="profile" />
        {/* <button onClick={imgUploadHandler}>Upload</button> */}


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

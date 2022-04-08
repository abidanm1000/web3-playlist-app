import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Song } from '../components/Song'
import { useMoralis } from "react-moralis";


export const Profile = ({logoutPage, newAccount, theme, switchDarkTheme, switchLightTheme, profileSongs}) => {

  const { user } = useMoralis();

  const account = user.get('ethAddress');
  let formatAccount = account.slice(0,4) + '...' + account.slice(-4);

  let defaultProfile = "/images/me1.jpg"



  return (
    <div className={`profile-content ${theme}`}>

      <div className='profile-sidebar'>
        <Sidebar 
        logoutPage={logoutPage} 
        newAccount={newAccount} 
        switchDarkTheme={switchDarkTheme}
        switchLightTheme={switchLightTheme}
        theme={theme}
        />
      </div>

      <div className={`profile-info ${theme}`}>

        <img id="profile-img" src={defaultProfile} alt="profile" />

        <h1 className="profile-name">Welcome back</h1>
        <span className={`profile-account ${theme}`}>{formatAccount}</span>

        <div className="profile-songs">
          {profileSongs.map((song, index) => <Song key={index} profileSongs={profileSongs} songTrack={song.strTrack || song.strAlbum} songArtist={song.strArtist} songGenre = {song.strGenre}  songVid = {song.strMusicVid}/>)}
        </div>

      </div>

    </div>
  )
}

{/* <div className="profile-stats">
  <div className="stats">
    <h4><span>20</span> Tracks</h4>
  </div>

  <div className="stats">
    <h4><span>2</span> Playlists</h4>
  </div>
</div> */}

// code for user uploading their own profile pic and storing in firebase

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

/* <input type="file" onChange={imgSelectHandler} /> */
/* <button onClick={imgUploadHandler}>Upload</button> */


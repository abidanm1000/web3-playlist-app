import React from 'react'
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
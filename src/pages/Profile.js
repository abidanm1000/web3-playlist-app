import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { SavedSong } from '../components/SavedSong'
import { useMoralis } from "react-moralis";


export const Profile = ({logoutPage, newAccount, theme, switchDarkTheme, switchLightTheme, profileSongs, savedSongs}) => {

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

          <div className='profile-songs-container'>
            <div className="profile-songs-header">
              <div id='saved-song-title'>Title</div>
              <div id='saved-genre-title'>Genre</div>
            </div>

            <div className="saved-song-list">
              {savedSongs.map((song, index) => <SavedSong key={index} track={song.track} artist={song.artist} genre={song.genre} />)}
            </div>
          </div>
          
        </div>

      </div>

    </div>
  )
}
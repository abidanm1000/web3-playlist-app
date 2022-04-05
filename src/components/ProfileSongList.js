import React from 'react'
import {Song} from './Song'

export const ProfileSongList = ({ profileSongs }) => {
  return (
    <div className="Songlist">
    
      <div className='song-header'>
        <div><h1>Song List</h1></div>
      </div>

      <div className='song-list-header'>
        <div id='song-title'>Title</div>
        <div id='genre-title'>Genre</div>
        <div id='price-title'>Price</div>
      </div>

      <div className="song-container">
  {/*{profileSongs.map(song => <Song songTrack={song.strTrack || song.strAlbum} songArtist={song.strArtist} songGenre = {song.strGenre}/>)}*/}
      </div>
    </div>
  )
}

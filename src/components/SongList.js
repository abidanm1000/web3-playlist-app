import React from 'react'
import {Song} from './Song'
import {FilterControl} from '../components/FilterControl'

export const SongList = ({ songs, setFilter }) => {
  return (
    <div className="Songlist">
    
      <div className='song-header'>
        <div><h1>Song List</h1></div>
        <div>
          <FilterControl setFilter = {setFilter}/>
        </div>
      </div>

      <div className="song-container">
        {songs.map(song => <Song songTrack={song.strTrack || song.strAlbum} songArtist={song.strArtist} songGenre = {song.strGenre}/>)}
      </div>
    </div>
    
    
    
    
    
  )
}

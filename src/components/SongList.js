import React from 'react'
import {Song} from './Song'
import {FilterControl} from '../components/FilterControl'

export const SongList = ({ songs }) => {
  return (
    <div className="Songlist">
    
      <div className='song-header'>
        <div><h1>Song List</h1></div>
        <div>
          <FilterControl />
        </div>
      </div>

      <div className="song-container">
        {songs.map(song => <Song songTrack={song.strTrack} songArtist={song.strArtist}/>)}
      </div>
    </div>
    
    
    
    
    
  )
}

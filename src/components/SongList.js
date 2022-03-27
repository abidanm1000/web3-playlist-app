import React from 'react'
import {Song} from '../components/Song'
import {FilterControl} from '../components/FilterControl'

export const SongList = () => {
  return (
    <div className="Songlist">
      <div className='song-header'>
        <div><h6>Song List</h6></div>
        <div>
          We're Winning
          <FilterControl />
        </div>
      </div>
      <div className="song-container">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </div>
    
    
    
    
    
  )
}

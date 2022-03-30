import React from 'react'
import {Song} from '../components/Song'
import {FilterControl} from '../components/FilterControl'

export const SongList = () => {
  return (
    <div className="Songlist">
      <div className='song-header'>
        <div><h1>Song List</h1></div>
        <div>
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

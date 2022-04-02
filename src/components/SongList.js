import React, {useState} from 'react'
// import {Song} from '../components/Song'
import {FilterControl} from '../components/FilterControl'


export const SongList = ({songs}) => {

  // console.log(songs)
  

  // console.log(songList)
  songs.forEach(track => console.log(track))


  return (
    <div className="Songlist">
      <div className='song-header'>
        <div><h6>Song List</h6></div>
        <div>
        
          <FilterControl />
         
        
        </div>
      </div>
      <div className="song-container">
          
        <div className='song-list'>

        </div>
      </div>
    </div>
    
    
    
    
    
  )
}

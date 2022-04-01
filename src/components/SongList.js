import React, {userState} from 'react'
import {Song} from '../components/Song'
import {FilterControl} from '../components/FilterControl'


export const SongList = ({tracks}) => {

  // console.log(tracks)
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
       { tracks.map((track)=>{
         console.log(track)
          return <Song name ={tracks.track.name} />
       })  }
       
        
        
        </div>
      </div>
    </div>
    
    
    
    
    
  )
}

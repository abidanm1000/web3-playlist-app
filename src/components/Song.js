import React , { useState }  from 'react'


export const Song = ({artist} ) => {
  return (
    <div className="Song">
      <div className='song-info'>
        {/* <p>{trackName.data.mvids[0].strTrack}</p> */}
        <p className='artist'>{artist}</p>
      </div>

      song

      <p>2:30</p>
      <button>SELECT</button>
    </div>
  )
}

import React from 'react'

export const Song = () => {
  return (
    <div className="Song">
      <div className='song-info'>
        <p>Song Name</p>
        <p className='artist'>Song Artist</p>
      </div>

      <p className='time'>2:30</p>
      <button>SELECT</button>
    </div>
  )
}

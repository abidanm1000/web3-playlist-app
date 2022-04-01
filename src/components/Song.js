import React , { useState }  from 'react'


export const Song = ( { name } ) => {
  return (
    <div className="Song">
      <div className='song-info'>
        <p>{name.name}e</p>
        <p className='artist'>{name.artist.name}</p>
      </div>

      song

      <p>2:30</p>
      <button>SELECT</button>
    </div>
  )
}

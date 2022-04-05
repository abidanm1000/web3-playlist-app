import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Song = ({ songTrack, songArtist, songGenre, songArtists,songGenres, albumName }) => {

  return (
    <div className='Song'>
      <div className='song-info'>
        <p>
          {/* {songTrack}
         */}
         {albumName}
        </p>
        <p className='artist'>{songArtist}</p>
      </div>

      <p className='genre'>{songGenre}</p>

      <div className='price'>
        <FontAwesomeIcon icon="fa-brands fa-ethereum" />
        <p>0.05</p>
      </div>

      <div className='song-button-container'>
        <button className='song-button'>Add to Cart</button>
      </div>
    </div>
  )
}

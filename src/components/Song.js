import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Song = () => {

  return (
    <div className={`Song`}>
      <div className='song-info'>
        <p>Song Name</p>
        <p className='artist'>Song Artist</p>
      </div>

      <p className='time'>2:30</p>

      <div className='price'>
        <FontAwesomeIcon icon="fa-brands fa-ethereum" />
        <p>0.05</p>
      </div>

      <button className='song-button'>Add to Cart</button>
    </div>
  )
}

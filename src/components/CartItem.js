import React from 'react'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const CartItem = ({ total, setTotal, ethPrice, userId, profileSongs, song, songTrack, songArtist, songPrice, counter, setCounter }) => {
  // console.log(profileSongs)
  // removing individual song
  const removeSong = () => {
    let songs = profileSongs.map(item => song.id === item.id ? {...item, clicked: !item.clicked} : item)
    
    let newSongs = songs.filter(item => item.clicked)

    const payload = {
        songs: newSongs
    }
    setDoc(doc(db, 'users', userId), payload)
    setTotal(total - ethPrice);
    setCounter(counter - 1);
  }
  
  return (
    <div className='cart-item'>
        <div className='cart-item-description'>
            <p className='cart-song-name'>{songTrack}</p>
            <p className='cart-song-artist'>{songArtist}</p>
        </div>

        <div className='cart-item-price'>
            <FontAwesomeIcon icon="fa-brands fa-ethereum" />
            <p>{songPrice}</p>
        </div>
        
        <button className='cart-remove-button' onClick={removeSong}>Remove</button>
    </div>
  )
}

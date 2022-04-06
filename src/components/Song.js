import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

export const Song = ({ songTrack, songArtist, songGenre, userId, profileSongs, albumName, songArtists }) => {

  const ethPrice = 0.000280

  // generating IDs for added songs
  const generateId = array => {
    const songIDs = array.map(song => song.id)
    // console.log(Math.max(...taskIDs))
    if(songIDs.length === 0) {
      return 0
    }else {
      return Math.max(...songIDs) + 1
    }
  }

  // function to add song to cart on click
  const addSong = () => {
    const addedSong = {
      artist: songArtist,
      clicked: true,
      genre: songGenre,
      id: generateId(profileSongs),
      price: ethPrice,
      track: songTrack
    }

    let songsRef = profileSongs;
    songsRef.push(addedSong)

    const payload = {
      songs: songsRef
    }

    setDoc(doc(db, 'users', userId), payload)
  }
  return (
    <div className='Song'>
      <div className='song-info'>
        <p>{songTrack || albumName}</p>
        <p className='artist'>{songArtist || songArtists}</p>
      </div>

      <p className='genre'>{songGenre}</p>

      <div className='price'>
        <FontAwesomeIcon icon="fa-brands fa-ethereum" />
        <p>{ethPrice}</p>
      </div>

      <div className='song-button-container'>
        <button className='song-button' onClick={addSong}>Add to Cart</button>
      </div>
    </div>
  )
}
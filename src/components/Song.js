import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'
import ReactPlayer from 'react-player'

export const Song = ({ songTrack, songArtist, songGenre, userId, profileSongs, albumName, songArtists, songVid }) => {

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

  const [showVideo, setShowVideo] = useState('')


  const handleVideo = () => !showVideo ? setShowVideo('showVideo') : setShowVideo('')
   
      
  return (
    <div className='Song' onClick={handleVideo}>
      <div className='song-info'>
        <p className= {showVideo} id='video'><ReactPlayer url = {songVid} controls /></p>
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
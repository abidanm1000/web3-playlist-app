import React from 'react'

export const SavedSong = ({track, artist, genre}) => {
  return (
    <div className='saved-song'>
        <div className="saved-song-info">
            <div id='song-title'>{track}</div>
            <div id='song-artist'>{artist}</div>
        </div>
        <div id='song-genre'>{genre}</div>
    </div>
  )
}

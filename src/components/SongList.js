import React from 'react'
import {Song} from './Song'
import {FilterControl} from '../components/FilterControl'



export const SongList = ({ songs, setFilter, data , profileSongs, userId, songVid, showPlayer, setVidSource}) => {
  
  // const [searched, setSearched] = useState(false)
 
  return (
    
    <div className="Songlist">
      
    
      <div className='song-header' >
        <div><h1>Song List</h1></div>
        
        <div>
          <h3>Filter Control</h3>
        </div>
      </div>

      <div className='song-list-header'>
        <div id='song-title'>Title</div>
        <div id='genre-title'>Genre</div>
        <div id='price-title'>Price</div>
        <FilterControl setFilter = {setFilter}/>
      </div>

      <div className="song-container">
       {/* {
       searched ? (songs.map((song, index) => <Song key={index} profileSongs={profileSongs} userId={userId} songTrack={song.strTrack || song.strAlbum} songArtist={song.strArtist} songGenre = {song.strGenre}/>)) : 
       (data.map( datas => <Song albumName={datas.strAlbum} songArtists={datas.strArtist}/>))
      } */}
       
         {data.map( datas => <Song albumName={datas.strAlbum} songArtists={datas.strArtist}/>)}
         
       
        {songs.map((song, index) => <Song key={index} profileSongs={profileSongs} userId={userId} songTrack={song.strTrack || song.strAlbum} songArtist={song.strArtist} songGenre = {song.strGenre}  songVid = {song.strMusicVid} showPlayer = {showPlayer} setVidSource = {setVidSource}/>)} 
     
       
       </div>
       
    </div>
    
    
    
    
    
  )
}

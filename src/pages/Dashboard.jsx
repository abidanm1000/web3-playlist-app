import React, {useEffect, useState} from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'
import axios from 'axios';
// import { Song } from '../components/Song';


export const Dashboard = () => {
  const [songs, setSongs] = useState([]);

  useEffect(()=> {
    // let APIKEY = '523532';

    const getSong = async () => {
      try {
        const response = await axios.get(`https://theaudiodb.com/api/v1/json/523532/track.php?m=2115888`)
        .then((res)=> {
          setSongs(res.data.track)
        })
        
      } 
      catch(error) {
        console.log(error)
      }
    }
    
    getSong()
  
  }, [])
    // console.log(songs)
  
  return (
   
    <div className='Dashboard'>
    
      <div className='Sidebar'>
        <Sidebar />
      </div>

      <div className='Content'>
        <Navbar /> 
       

          
        
        <SongList songs={songs}/>
        
        
      </div>
    </div>
  ) 
}



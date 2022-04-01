import './App.css';
import { Dashboard } from './pages/Dashboard'
import { SongList } from './components/SongList';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Spotify from './utils/Spotify';

function App({tracks}) {
 
  console.log(tracks)
// console.log(tracks)
// const logout = () => {
//   setToken("")
//   window.localStorage.removeItem("token")
// }


  return (
   
    <div className="App"> 
    {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> */}
     <Dashboard />
     <SongList token = {Spotify} />
     
    </div>
  );
}

export default App;

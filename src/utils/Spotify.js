import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { SongList } from '../components/SongList';


function Spotify() {
 const clientSecret = "f68b7e1998c3456da5ebb27cab0b2b14"
 const clientId = "affcac2cd6a64c49a32b8f5ca048ce33"
 const redirectUri = "http://localhost:3000/";
//  let accessToken;


 console.log('Rendering app.js')

const [token, setToken] = useState('')
const [tracks, setTracks] = useState('')


 useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
    headers:  {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic' + btoa(clientId + ' : ' + clientSecret)
    },
    data: 'grant_type-client_credentials',
    method: 'POST'
 })
 .then(tokenResponse => {
   console.log(tokenResponse.data.access_token);
   setToken(tokenResponse.data.access_token);
   
   axios(`https://api.spotify.com/v1/tracks/${clientId}`, {
     method: 'GET',
     headers: {'Authorization' : 'Bearer' + tokenResponse.data.access_token}
   })
   .then(trackResponse => {
    setTracks(trackResponse.data.tracks.items);

   });

 });

}, []);
// console.log(token)

// const Spotify = {
//     getAccessToken() {
//       if (accessToken) {
//         return accessToken;
//       }
//       const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//       const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
//       if (accessTokenMatch && expiresInMatch) {
//         accessToken = accessTokenMatch[1];
//         const expiresIn = Number(expiresInMatch[1]);
//         window.setTimeout(() => accessToken = '', expiresIn * 1000);
//         window.history.pushState('Access Token', null, '/');
//         return accessToken;
//       } else {
//         const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
//         window.location = accessUrl;
//       }
//     },
//     search(term) {
//       const accessToken = Spotify.getAccessToken();
//       return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       }).then(response => {
//         return response.json();
//       }).then(jsonResponse => {
//         if (!jsonResponse.tracks) {
//           return [];
//         }
//         return jsonResponse.tracks.items.map(track => ({
//           id: track.id,
//           name: track.name,
//           artist: track.artists[0].name,
//           album: track.album.name,
//           uri: track.uri
//         }));
//       });
//     },
//     savePlaylist(name, trackUris) {
//       if (!name || !trackUris.length) {
//         return;
//       }
//       const accessToken = Spotify.getAccessToken();
//       const headers = { Authorization: `Bearer ${accessToken}` };
//       let userId;
//       return fetch('https://api.spotify.com/v1/me', { headers: headers }
//       ).then(response => response.json()
//       ).then(jsonResponse => {
//         userId = jsonResponse.id;
//         return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
//           headers: headers,
//           method: 'POST',
//           body: JSON.stringify({ name: name })
//         }).then(response => response.json()
//         ).then(jsonResponse => {
//           const playlistId = jsonResponse.id;
//           return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
//             headers: headers,
//             method: 'POST',
//             body: JSON.stringify({ uris: trackUris })
//           });
//         });
//       });
//     }
//   };
console.log(tracks)
  return (
    <div><SongList tracks = {tracks}/></div>
  )
}

export default Spotify
import React, { useEffect, useState } from 'react'
// component imports
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { SongList } from '../components/SongList'
import { Cart } from '../components/Cart'
import { Carousel } from '../components/Carousel'
// firebase imports
import { onSnapshot, doc } from 'firebase/firestore'
import db from '../utils/firebase'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { Profile } from './Profile'
import { useMoralis } from 'react-moralis'
import ReactPlayer from 'react-player'


export const Dashboard = () => {

  const [songs, setSongs] = useState([])
  const [profileSongs, setProfileSongs] = useState(songs)
  const [filter, setFilter] = useState('mostloved.php?format=track')
  const [cart, setCart] = useState('')
  const [theme, setTheme] = useState('');
  const [client, setClient] = useState({})
  const {isAuthenticated} = useMoralis();
  const [data , setData ] = useState([])
  const [q , setQ] = useState("")
  const [open, setOpen] = useState(true);
  const [activate, setActivate] = useState('');
  const [video,setVideo] = useState('')
  const [vidSource, setVidSource]  = useState('');
  // search function API call
  let handleChange = async (e) => { 
    e.preventDefault()
    
    if(data){
    await fetch(`https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${q}`)
      .then(response => response.json())
      .then(json => setData(json.album))
    }
    
    setSongs([])
  }
   


  // fetching API and checking authentication
  useEffect(() => {
    // prevents user from skipping authentication
    auth.onAuthStateChanged(currentUser => {
        if(currentUser) {
          // keep track of that user
          // console.log(currentUser)
          setClient(currentUser.uid)
        } else {
          window.location = '/'
          // console.log('ERROR PLEASE SIGN IN FIRST')
        }
    })

    // reading firestore data
    const unsub = onSnapshot(doc(db, 'users', `${client}`), (snapshot) => {
      let userSongs = snapshot.data().songs
      setProfileSongs(userSongs)
    })

    // song list function API call - works with filter control
    let getSong = async ()=>{
      await fetch(`https://theaudiodb.com/api/v1/json/523532/${filter}`)
        .then(response => response.json())
        .then(json => setSongs(json.loved))
    }

    getSong();

    // clean up function makes onSnapshot stop listening for changes
    return unsub
  }, [client, filter])
  

  let activateSidebar = () => !activate === '' ?  setActivate('') : setActivate('activate')

  let closeSidebar = () => !activate === '' ? setActivate('activate') : setActivate('')

  const handleToggle = () => {
    setOpen(!open);
  };

 //video player
 let showPlayer = () => !video === '' ? setVideo('') : setVideo('showPlayer')
 let closePlayer = () => video === '' ? setVideo('showPlayer') : setVideo('')


  // activates light mode when switchTheme runs on click
  let switchDarkTheme = () => !theme === '' ? setTheme('') : setTheme('lightMode');
  let switchLightTheme = () => !theme === '' ? setTheme('lightMode') : setTheme('');



  // Show and Hide Cart functionality 
  const showCart = cart ? 'show' : '';
  const activeCart = () => !cart ? setCart('show') : setCart('');
  const hideCart = () => cart ? setCart('') : setCart('show');



  // logout function passed to sidebar
  const logoutPage = async () => {
      await signOut(auth)
      window.location = '/'
  }

  // new Account function passed to side bar
  const newAccount = async () => {
    await signOut(auth)
    window.location = '/signup'
  }

 // metamask/moralis auth returning profile
   if (isAuthenticated) {
     return (
       <Profile 
       logoutPage={logoutPage} 
       newAccount={newAccount} 
       theme={theme} 
       switchDarkTheme={switchDarkTheme} 
       switchLightTheme={switchLightTheme}
       profileSongs={profileSongs}
       />
     );
   }
  
  return (
    <div className='Dashboard'>
      <div >
        <Sidebar 
        logoutPage={logoutPage}
        newAccount={newAccount}
        switchDarkTheme = {switchDarkTheme}
        switchLightTheme = {switchLightTheme}
        theme={theme}
        closeSidebar={closeSidebar}
        />
      </div>

      <div className={`Content ${theme} ${video}`}>
        <Navbar
          activeCart={activeCart}
          setQ={setQ}
          q={q}
          handleChange={handleChange}
          setSongs={setSongs}
          songs={songs}
          handleToggle={handleToggle}
          activateSidebar={activateSidebar}
        />
        
        <Carousel songs={songs} />

        {/* video player container*/}
        <div className={`player ${video}`}>
          <p className='exit-player' onClick={closePlayer}>X</p>
          <div className='player-container'><ReactPlayer url = {vidSource} controls /></div>
        </div>

        <SongList 
        songs={songs}
        setFilter= {setFilter}
        data = {data}
        profileSongs={profileSongs}
        userId={client}
        showPlayer={showPlayer}
        setVidSource = {setVidSource}
        />
      </div>

      <div className='Cart-Section'>
        <Cart
        showCart={showCart}
        hideCart={hideCart} 
        userId={client} 
        profileSongs={profileSongs}
        />
      </div>
    </div>
  )
}
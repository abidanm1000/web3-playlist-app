import React, {useEffect, useState} from 'react'
// component imports
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'
import { Cart } from '../components/Cart'
import { Carousel } from '../components/Carousel'
// firebase imports
import { onSnapshot, doc, deleteDoc, setDoc } from 'firebase/firestore'
import db from '../utils/firebase'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { ProfileSongList } from '../components/ProfileSongList'


export const Dashboard = () => {

  const [songs, setSongs] = useState([])
  const [profileSongs, setProfileSongs] = useState(songs)
  const [filter, setFilter] = useState('mostloved.php?format=track')
  const [cart, setCart] = useState('')
  const [theme, setTheme] = useState('');
  const [user, setUser] = useState({})

  // activates light mode when switchTheme runs on click
   let switchDarkTheme = () => !theme === '' ? setTheme('') : setTheme('lightMode');
   let switchLightTheme = () => !theme === '' ? setTheme('lightMode') : setTheme('');



  // Show and Hide Cart functionality 
  const showCart = cart ? 'show' : '';
  const activeCart = () => !cart ? setCart('show') : setCart('');
  const hideCart = () => cart ? setCart('') : setCart('show');

   //theaudiodb.com/api/v1/json/523532/mostloved.php?format=album


  // fetching API and checking authentication
  useEffect(()=>{
    // prevents user from skipping authentication
    auth.onAuthStateChanged(currentUser => {
        if(currentUser) {
          // keep track of that user
          // console.log(currentUser)
          setUser(currentUser.uid)
        } else {
          window.location = '/'
          // console.log('ERROR PLEASE SIGN IN FIRST')
        }
    })

    // reading firestore data
    const unsub = onSnapshot(doc(db, 'users', `${user}`), (snapshot) => {
      let userSongs = snapshot.data().songs
      setProfileSongs(userSongs)
    })


    let getSong = async ()=>{
      await fetch(`https://theaudiodb.com/api/v1/json/523532/${filter}`)
      .then(response => response.json())
      .then(json => setSongs(json.loved))
    }
    
    getSong();

    // clean up function makes onSnapshot stop listening for changes
    return unsub
  }, [user, filter])

  // console.log(songs)

  







  // logout function passed to sidebar
  const logout = async () => {
      await signOut(auth)
      window.location = '/'
  }

  // new Account function passed to side bar
  const newAccount = async () => {
    await signOut(auth)
    window.location = '/signup'
}
  

  return (
    <div className='Dashboard'>
      <div >
        <Sidebar logout={logout}
          newAccount={newAccount}
          switchDarkTheme = {switchDarkTheme}
          switchLightTheme = {switchLightTheme}
          theme={theme}
        />
        
      </div>
      <div className={`Content ${theme}`} >
        <Navbar activeCart={activeCart}/> 
        <Carousel songs={songs}/>
        <SongList 
        songs={songs}
        setFilter= {setFilter}
        profileSongs={profileSongs}
        userId={user}
        />
      </div>

      <div className='Cart-Section'>
        <Cart showCart={showCart} hideCart={hideCart} userId={user} profileSongs={profileSongs}/>
      </div>
    </div>
  ) 
}
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar }  from '../components/Navbar'
import { SongList } from '../components/SongList'
import { Cart } from '../components/Cart'
import { Carousel } from '../components/Carousel'

export const Dashboard = () => {

  const [songs, setSongs] = useState([])
  const [filter, setFilter] = useState('mostloved.php?format=track')
  const [cart, setCart] = useState('')

  const showCart = cart ? 'show' : '';
  const activeCart = () => !cart ? setCart('show') : setCart('');
  const hideCart = () => cart ? setCart('') : setCart('show');

   //theaudiodb.com/api/v1/json/523532/mostloved.php?format=album

   const [data , setData ] = useState([])
   const [q , setQ] = useState("")
   
   useEffect(() => {
     let getAlbum = async ()=>{

    await fetch(`https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${q}`)
     .then(response => response.json())
     .then(json => setData(json.album))
     }
   getAlbum()
   },[q])
   

  useEffect(()=>{
    let getSong = async ()=>{

    await fetch(`https://theaudiodb.com/api/v1/json/523532/${filter}`)
    .then(response => response.json())
    .then(json => setSongs(json.loved))
    }
    
    getSong();
  }, [filter])

  console.log(songs)

  

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Content'>
        <Navbar 
        activeCart={activeCart}
        setQ={setQ}
        q = {q}
        /> 

        <Carousel 
        songs={songs}
        />

        <SongList 
        songs={songs}
        setFilter= {setFilter}
        data = {data}
        
        />
      </div>

      <div className='Cart-Section'>
        <Cart 
        showCart={showCart} 
        hideCart={hideCart}
        />
      </div>
    </div>
  ) 
}
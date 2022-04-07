
// import React, {useEffect, useState} from 'react'
import { ShoppingCart } from "@material-ui/icons";
import { motion } from "framer-motion";
import {TocRounded} from "@material-ui/icons";


export const Navbar = ({ activeCart, setQ, q, handleChange, setSongs, songs, handleToggle, activateSidebar }) => {

  // const sidebarActions = () => {
  //   handleToggle()
  //   activateSidebar()
  // }
// const [data , setData ] = useState([])
// const [q , setQ] = useState("")

// useEffect(() => {
  
//   fetch(`https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${q}`)
//   .then((response)=> response.json())
//   .then(json => setData(json.album))


// },[q])

// console.log(data)

// console.log(q)
  return (
    <div className='Navbar'>

      <motion.div >
        <TocRounded onClick={()=> {
          handleToggle();
          activateSidebar();
        }} />
      </motion.div>
      
      <div className="left" >
        <div>
          <h1>Discover</h1>
          <p>collect digital music of your choice and make it yours</p>
        </div>
      </div>

      <div className="search">
        <form onSubmit={handleChange}>
        <input type="text" value={q} id="input" placeholder='◉_◉   Search' onChange={(e) =>setQ(e.target.value)}/>
      </form>
      </div>
      
      <div className="right">
      
        <div className="profilee">
          {<ShoppingCart onClick={activeCart}/>}
        </div>
        
         
      </div>
   
    </div>
  
  )
  
}

import React from 'react'
import { ShoppingCart } from "@material-ui/icons";
import { motion } from "framer-motion";
import {TocRounded} from "@material-ui/icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Navbar = ({ counter, activeCart, setQ, q, handleChange, setSongs, songs, handleToggle, activateSidebar }) => {

  return (
    <div className='Navbar'>
      <div onClick={()=> {
        handleToggle();
        activateSidebar();
      }}>
        <FontAwesomeIcon icon="fa-solid fa-fire" className="navbar-button"/>
      </div>
      
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
          <div>{counter}</div>
        </div>
        
         
      </div>
   
    </div>
  
  )
  
}

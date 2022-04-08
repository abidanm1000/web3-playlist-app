
// import React, {useEffect, useState} from 'react'
import { ShoppingCart } from "@material-ui/icons";


export const Navbar = ({ activeCart, setQ, q, handleChange }) => {


  return (
    <div className='Navbar'>
      
      <div className="left">
        <div>
          <h1>Discover</h1>
          <p>collect digital music of your choice and make it yours</p>
        </div>
      </div>

      <div className="search">
        <form onSubmit={handleChange}>
        <input type="text" value={q} id="" placeholder='◉_◉   Search' onChange={(e) =>setQ(e.target.value)}/>
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

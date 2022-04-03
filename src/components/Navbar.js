
import React from 'react'
import { ShoppingBasket} from "@material-ui/icons";

export const Navbar = () => {


  return (
    <div className='Navbar'>
      
      <div className="left">
        <div>
          <h1>Discover</h1>
          <p>collect digital music of your choice and make it yours</p>
        </div>
      </div>

      <div className="search">
        <input type="text" name="" id="" placeholder='◉_◉   Search'/>
      </div>
      
      <div className="right">
      
        <div className="profilee">
         {< ShoppingBasket/> }
        </div>
        

      </div>
    </div>
  )
}

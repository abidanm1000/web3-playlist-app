
// import React, {useEffect, useState} from 'react'
import { ShoppingCart } from "@material-ui/icons";


export const Navbar = ({ activeCart, setQ, q }) => {

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
      
      <div className="left">
        <div>
          <h1>Discover</h1>
          <p>collect digital music of your choice and make it yours</p>
        </div>
      </div>

      <div className="search">
        <input type="text" value={q} id="" placeholder='◉_◉   Search' onChange={(e) =>setQ(e.target.value)}/>
      </div>
      
      <div className="right">
      
        <div className="profilee">
          {<ShoppingCart onClick={activeCart}/>}
        </div>
        
         
      </div>
   
    </div>
  
  )
  
}

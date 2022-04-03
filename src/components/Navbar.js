import { colors } from '@material-ui/core'
import React, {useState} from 'react'

export const Navbar = () => {

  const [input,setInput] = useState('')
    
    const handleChange = (e) => {
        input(e.target.value)
    }
    const handleForm = (e) => {
      e.preventDefault()
    }
  return (
    <div className='Navbar'>
      
      <div className="left">
        <h1>Discover</h1>
        <p>collect digital music of your choice and make it yours</p>
      </div>
      
      <div className="search">
      <form onSubmit={handleForm} >
      <input onChange={handleChange} id= 'todo-input' type='text' placeholder='Artists, Songs or Albums' />
</form>
      </div>
      
      <div className="right">
        <img src="/images/sun.svg" alt="" />

        <div className="profilee">
          <img src="/images/me.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

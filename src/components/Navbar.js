import React from 'react'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      
      <div className="left">
    <h1>Discover</h1>
    <p>collect digital music of your choice and make it yours</p>
      </div>
      <div className="search">
        <input type="text" name="" id="" />
      </div>
      <div className="login">
        <p>SignUp /</p> <p> LogIn</p>
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

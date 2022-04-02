import React from 'react'

export const CartItem = () => {
  return (
    <div className='cart-item'>
        <div className='cart-item-description'>
            <p className='cart-song-name'>Chosen Song</p>
            <p className='cart-song-artist'>Chosen Artist</p>
        </div>
        <img src="" alt="" />
        <p>0.00</p>
        <button className='cart-remove-button'>Remove</button>
    </div>
  )
}

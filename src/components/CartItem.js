import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const CartItem = () => {
  return (
    <div className='cart-item'>
        <div className='cart-item-description'>
            <p className='cart-song-name'>Chosen Song</p>
            <p className='cart-song-artist'>Chosen Artist</p>
        </div>

        <div className='cart-item-price'>
            <FontAwesomeIcon icon="fa-brands fa-ethereum" />
            <p>0.00</p>
        </div>
        
        <button className='cart-remove-button'>Remove</button>
    </div>
  )
}

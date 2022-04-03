import React, {useState} from 'react'
import { CartItem } from './CartItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MetaLogo from '../images/metamask-logo.png'



export const Cart = () => {

  
    
  return (
    <div className='cart'>
        <div className='cart-list'>
            <div className='cart-header'>
                <div className='cart-title'>
                    <div className='return-button'><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></div>
                    <div className='cart-info'>Cart <FontAwesomeIcon id='cart-eth-icon' icon="fa-brands fa-ethereum" /> 0</div>
                </div>
                <div className='cart-options'>
                    <div className='cart-purchase'>Confirm Purchase <img id='meta-logo' src={MetaLogo} alt="" /></div>
                </div>
            </div>
            
            <div className='cart-items'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
        </div>
    </div>
  )
}

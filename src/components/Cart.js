import React from 'react'
import { CartItem } from './CartItem'


export const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-list'>
            <div className='cart-header'>
                <div className='cart-title'>
                    <div className='return-button'>Back</div>
                    <div className='cart-info'>Cart $0</div>
                </div>
                <div className='cart-options'>
                    <div className='cart-purchase'>Confirm Purchase (logo)</div>
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

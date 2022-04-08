import React from 'react'
import { CartItem } from './CartItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MetaLogo from '../images/metamask-logo.png'
import { useMoralis } from "react-moralis";

export const Cart = ({ showCart, hideCart, userId, profileSongs, total, setTotal, ethPrice, counter, setCounter }) => {

    const { authenticate } = useMoralis();

    
  return (
    <div className={`cart ${showCart}`}>
        <div className='cart-list'>
            <div className='cart-header'>
                <div className='cart-title'>
                    <div className='return-button' onClick={hideCart}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></div>
                    <div className='cart-info'><div className='cart-title'>Cart</div> {total}</div>
                </div>
                <div className='cart-options'>
                    <div className='cart-purchase' onClick={authenticate}>Confirm Purchase <img id='meta-logo' src={MetaLogo} alt="" /></div>
                </div>
            </div>
            
            <div className='cart-items'>
                {profileSongs.map((song, index) => <CartItem key={index} song={song} userId={userId} profileSongs={profileSongs} songTrack={song.track} songArtist={song.artist} songGenre={song.genre} songPrice={song.price} total={total} setTotal={setTotal} ethPrice={ethPrice} counter={counter} setCounter={setCounter}/>)}
            </div>
        </div>
    </div>
  )
}

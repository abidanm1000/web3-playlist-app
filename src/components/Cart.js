import React from 'react'
import { CartItem } from './CartItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MetaLogo from '../images/metamask-logo.png'
import { useMoralis } from "react-moralis";
import { isCursorAtEnd, isFocusable } from '@testing-library/user-event/dist/utils';

export const Cart = ({ showCart, hideCart, userId, profileSongs }) => {

    const { authenticate, user } = useMoralis();

    const savedSongs = profileSongs;

    // if(user) {
    //     user.set('saved-songs', [savedSongs])
    //     user.save();
    // }

    
  return (
    <div className={`cart ${showCart}`}>
        <div className='cart-list'>
            <div className='cart-header'>
                <div className='cart-title'>
                    <div className='return-button' onClick={hideCart}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></div>
                    <div className='cart-info'>Cart <FontAwesomeIcon id='cart-eth-icon' icon="fa-brands fa-ethereum" /> 0</div>
                </div>
                <div className='cart-options'>
                    <div className='cart-purchase' onClick={authenticate}>Confirm Purchase <img id='meta-logo' src={MetaLogo} alt="" /></div>
                </div>
            </div>
            
            <div className='cart-items'>
                {profileSongs.map((song, index) => <CartItem key={index} song={song} userId={userId} profileSongs={profileSongs} songTrack={song.track} songArtist={song.artist} songGenre={song.genre} songPrice={song.price}/>)}
            </div>
        </div>
    </div>
  )
}

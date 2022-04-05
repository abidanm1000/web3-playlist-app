import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export const CarouselItem = ({covers, songName, songArtist}) => {
  
  const divStyle = {
    backgroundImage: `url(${covers})`,
    backgroundSize: '110%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  
  
  return (


    <div className='Carousel-Item' style = {divStyle}>
        <div className='detail-container'>
            <div className='item-details'>
                <p>{songName}</p>
                <p className='artist'>{songArtist}</p>
            </div>
            <div className='item-price'>
                <FontAwesomeIcon icon="fa-brands fa-ethereum" />
                <p>0.05</p>
            </div>
            <FontAwesomeIcon className='plus-icon' icon="fa-solid fa-circle-plus" />
        </div>
    </div>
   
  )
}

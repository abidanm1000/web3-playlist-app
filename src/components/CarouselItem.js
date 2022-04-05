import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export const CarouselItem = ({covers, songName, songArtist}) => {
  const ethPrice = 0.00028
  
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
                <p>{ethPrice}</p>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-circle-play" className='play-icon'/>
        </div>
    </div>
   
  )
}

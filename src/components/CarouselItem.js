import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Background from '../images/background.jpg'


export const CarouselItem = () => {

    const divStyle = {
        backgroundImage: `url(${Background})`
      };
      

  return (
    <div className='Carousel-Item' style={divStyle}>
        
        <div className='detail-container'>
            <div className='item-details'>
                <p>song track</p>
                <p className='artist'>song artist</p>
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

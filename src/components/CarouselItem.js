import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const CarouselItem = () => {
  return (
    <div className='Carousel-Item'>
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

import React from 'react'
import { CarouselItem } from './CarouselItem'
import '../styles/Carousel.css'

export const Carousel = () => {
  return (
    <div className='Carousel'>
        <div className='carousel-list'>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
        </div>
    </div>
  )
}

import React , {useEffect, useState}from 'react'
import { CarouselItem } from './CarouselItem'
import '../styles/Carousel.css'

export const Carousel = ({songs}) => {
  const [covers, setCovers] = useState([])
  useEffect(()=>{
    let getCover = async ()=>{

    await fetch(`https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=album`)
    .then(response => response.json())
    .then(json => setCovers(json.loved))
    }
    
    getCover();
  }, [])
  // console.log(covers.strAlbum3DThumb)
  return (
    <div className='Carousel'>
        <div className='carousel-list'>
            {/* <CarouselItem covers = {covers}/> */}
            {covers.map(cover => <CarouselItem covers = {cover.strAlbum3DThumb} songName = {cover.strAlbum} songArtist = { cover.strArtist}/>)}
           
         </div>
    </div>
  )
}

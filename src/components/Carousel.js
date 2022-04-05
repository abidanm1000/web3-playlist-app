import React , {useEffect, useState}from 'react'
import { CarouselItem } from './CarouselItem'
import '../styles/Carousel.css'

export const Carousel = ({songs}) => {

  let defaultBackground = 'https://www.kindpng.com/picc/m/81-810478_record-clipart-svg-vinyl-record-svg-hd-png.png'

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
            {covers.map((cover, index) => <CarouselItem key={index} covers = {cover.strAlbum3DThumb || defaultBackground} songName = {cover.strAlbum} songArtist = { cover.strArtist}/>)}
           
         </div>
    </div>
  )
}

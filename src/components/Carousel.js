import React , {useEffect, useState}from 'react'
import { CarouselItem } from './CarouselItem'
import '../styles/Carousel.css'

export const Carousel = () => {

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


const [albumNumber, setAlbumNumber] = useState()
const [open, setOpen] = React.useState(false);

const handleOpen = (id) => {
  
  setAlbumNumber(covers.find(cover => cover.idAlbum === id))
  

  setOpen (true);
}


  return (
    <> 
    <div className='Carousel'>
        <div className='carousel-list'>
            {covers.map((cover, index) =>  <div key={index} className='carousel-modal' onClick={()=> handleOpen(cover.idAlbum)}><CarouselItem covers = {cover.strAlbum3DThumb || defaultBackground} songName = {cover.strAlbum} songArtist = { cover.strArtist} /></div>)}
           
         </div>
    </div>
    </>
  )
}

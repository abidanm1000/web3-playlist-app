import React , {useEffect, useState}from 'react'
import { CarouselItem } from './CarouselItem'
import '../styles/Carousel.css'
// import Modal from "@material-ui/core/Modal";
import {useParams} from 'react-router-dom'
// import Modal from '@mui/material/Modal';
// or

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player'



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

// const {id} = useParams()

const [albumNumber, setAlbumNumber] = useState()

// const albumNumber = covers.map(cover => cover.idAlbum)

const [open, setOpen] = React.useState(false);
const handleOpen = (id) => {
  
  setAlbumNumber(covers.find(cover => cover.idAlbum === id))
  

  setOpen (true);
}
const handleClose = () => setOpen(false);
// console.log(albumNumber)



const style = {
  position: 'absolute',
  top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    
    // boxShadow: 24,
    p: 4,
    color: 'white',
    
  };

  // const [source , setSource] = useState('')

  //video player
  // const videoPlayer = [
  //   {
  //     id:1,
  //     src: setSource('/images/thriller.mp4'),
  //   },
  //   {
  //     id:2,
  //     src: 'images/darkside.mp4'
  //   }
  // ]

//   useEffect(()=> {
//     setSource('/images/thriller.mp4')
//   }, [])

// console.log(source)

  // videoPlayer.forEach(video => {
  //   for (let key in video) {
  //     // video.[key]++;
  //       console.log(`${key}: ${video[key]}`);
  //   }
  //     });
  // let video = {'https://www.youtube.com/watch?v=sOnqjkJTMaA',
  // }

  // console.log(covers.strAlbum3DThumb)

 
  // console.log(video)



  // const [video, setVideo] = useState(videoPlayer)

// console.log(videoPlayer)
  return (
    <> 
    <Modal
      open={open}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      // {videoPlayer.map( video =>  id={video.id} src={video.src}/>)}
      >
      <Box sx={style}>
        <ReactPlayer 
       url = 'https://www.theaudiodb.com/images/media/track/thumb/r14d7f1605475399.jpg'
      controls
    />
    </Box>
    </Modal>
    {/* <Modal
      open={open}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      // {videoPlayer.map( video =>  id={video.id} src={video.src}/>)}
      >
      <Box sx={style}>
        <ReactPlayer 
       url = '/images/darkside.mp4'
      controls
    />
    </Box>
    </Modal> */}
    
    <div className='Carousel'>
        <div className='carousel-list'>
            {covers.map((cover, index) =>  <div key={index} className='carousel-modal' onClick={()=> handleOpen(cover.idAlbum)}><CarouselItem covers = {cover.strAlbum3DThumb || defaultBackground} songName = {cover.strAlbum} songArtist = { cover.strArtist} /></div>)}
           
         </div>
    </div>
    </>
  )
}

import React, {useState} from 'react'
import { CartItem } from './CartItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MetaLogo from '../images/metamask-logo.png'
import { motion } from 'framer-motion'



export const Cart = () => {

    const [open, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(!open);
      };
      const sidebarVariants = {
        true: {},
        false: {
          width: "10rem",
          transition: {
            delay: 0.4,
          },
        },
      };
    console.log(sidebarVariants)
    
  return (
    <div className='cart'>
        <motion.div 
        initial={`${open}`}
        animate={`${open}`}
        variants={sidebarVariants}
        className='cart-list'>
            <div className='cart-header'>
                <div className='cart-title'>
                    <motion.div whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }} onClick={handleToggle} className='return-button'>Back</motion.div>
                    <div className='cart-info'>Cart <FontAwesomeIcon id='cart-eth-icon' icon="fa-brands fa-ethereum" /> 0</div>
                </div>
                <div className='cart-options'>
                    <div className='cart-purchase'>Confirm Purchase <img id='meta-logo' src={MetaLogo} alt="" /></div>
                </div>
            </div>
            
            <div className='cart-items'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
        </motion.div>
    </div>
  )
}

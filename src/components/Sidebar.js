
import { motion } from "framer-motion";
import {
  
  AccountCircleRounded,
  AttachMoneyRounded,
  BarChartRounded,
  DashboardRounded,
  ShoppingCart,
  LocalGasStationRounded,
  SignalWifi2BarLockRounded,
  SettingsRemoteRounded,
  ColorLensRounded,
  TocRounded,
  OpenInNew,
  WbSunny,
 
  
  NightsStayOutlined,
} from "@material-ui/icons";
import Item from './Item'
import { useState } from "react";


export const Sidebar = ({ logout, newAccount, switchDarkTheme, switchLightTheme })=> {

  const [open, setOpen] = useState(true);


  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "8rem",
      transition: {
        delay: 0.4,
      },
    },
  };
// console.log(sidebarVariants)
  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "center",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  const handleCart = () => {
    setOpen(!open);
  };
  return (
    <div className="Sidebar">
      <motion.div
        // dataOpen={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src='https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'
              alt="profile_img"
              onClick={()=> window.location ='/profile'}
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                DASHBOARD
              </motion.h3>
  
              <Item icon={<DashboardRounded />} name="Home" />
              <span onClick={handleCart}> 
              {/* <Item icon /> <img src={switchIcon} alt="" /></span> */}
              </span>
              <div onClick={()=> window.location ='/dashboard'}><Item icon={<DashboardRounded />} name="Home" /></div>
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              ACCOUNT
            </motion.h3>
            <div onClick={newAccount}><Item icon={<AccountCircleRounded />} name="New Account"/></div>
            {/* <Item icon={< ShoppingCart />} name="Checklist" />{" "} */}
            <div onClick={logout}><Item icon={< OpenInNew />} name="Logout"/></div>
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Themes
              {/* CUSTfdfOMIZATION */}
            </motion.h3>
            {/* <FontAwesomeIcon icon="fa-solid fa-sun-bright" /> */}
            <div>
              <button onClick={switchDarkTheme} >
                <Item icon={<WbSunny/>} />
              </button>
              <button onClick={switchLightTheme}>
                <Item icon={<NightsStayOutlined />} />
              </button>
              </div>  
          </div>
        </motion.div>
      </motion.div>

      
    </div>
  );
}
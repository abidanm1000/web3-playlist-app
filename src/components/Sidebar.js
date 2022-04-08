import { useState } from "react";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import Item from './Item'
import {
  AccountCircleRounded,
  DashboardRounded,
  TocRounded,
  OpenInNew,
  WbSunny,
  NightsStayOutlined,
} from "@material-ui/icons";

export const Sidebar = ({ theme, logoutPage, newAccount, switchDarkTheme, switchLightTheme, activate, closeSidebar })=> {

  const { authenticate, logout } = useMoralis();
  const [open, setOpen] = useState(true);



  const handleToggle = () => {
  setOpen(!open);
  }
  
  const sideContainerVariants = {
    true: {
      width: "12rem",
    },
    false: {
      transition: {
        width: '12rem',
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

  return (
    <div className={`Sidebar ${theme} ${activate}`}>
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
            onClick={() => {
              handleToggle();
              closeSidebar();
            }}
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
              border: "2px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src='/images/me1.jpg'
              alt="profile_img"
              onClick={authenticate}
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                Dashboard
              </motion.h3>
  
              
              <div onClick={()=>{ 
                logout();
                window.location ='/dashboard'
              }}><Item icon={<DashboardRounded />} name="Home" /></div>
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Account
            </motion.h3>
            <div onClick={newAccount}><Item icon={<AccountCircleRounded />} name="New Account" /></div>
            {/* <Item icon={< ShoppingCart />} name="Checklist" />{" "} */}
            <div onClick={()=>{
              logoutPage();
              logout();
            }}><Item icon={< OpenInNew />} name="Logout"/></div>
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
              <div onClick={switchDarkTheme} >
                <Item icon={<WbSunny />} />
              </div>
              <div onClick={switchLightTheme}>
                <Item icon={<NightsStayOutlined />} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>


    </div>
  );
}
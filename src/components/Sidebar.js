
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  AttachMoneyRounded,
  BarChartRounded,
  DashboardRounded,
  ShoppingCart,
  LocalGasStationRounded,
  SignalWifi2BarLockRounded,
  
  TocRounded,
  OpenInNew,
} from "@material-ui/icons";
import Item from './Item'
import { useState } from "react";


export const Sidebar = ({})=> {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
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
              src='./images/me.jpg'
              alt="profile_img"
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
              <Item icon={< ShoppingCart/>} name="Cart" />
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              ACCOUNT
            </motion.h3>
            <Item icon={< OpenInNew />} name="Sign In" />
            {/* <Item icon={< ShoppingCart />} name="Checklist" />{" "} */}
            <Item icon={<AccountCircleRounded />} name="Sign Up" />
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              {/* CUSTfdfOMIZATION */}
            </motion.h3>
            {/* <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" /> */}
          </div>
        </motion.div>
      </motion.div>

      
    </div>
  );
}


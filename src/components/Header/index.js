import React from "react";
import styles from "./Header.module.css";
import HeaderOption from "../HeaderOption/index";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/UserSlice";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";



function Header() {

  const user= useSelector(state => state.user.user);
  const dispatch=useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
    signOut(auth)
  }

  return (
    <div className={styles.header}>
      <div className={styles.left}>
     
        <img src="001-linkedin.png" alt="" />
        <div className={styles.search}>
                <SearchIcon />
            <input type="text" placeholder="Search" />
        </div>

      </div>

      <div className={styles.right}>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="me" onClick={logoutHandler}/>
            
      </div>
    </div>
  );
}

export default Header;

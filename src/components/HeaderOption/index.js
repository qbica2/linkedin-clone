import React from 'react'
import styles from './HeaderOption.module.css'
import {Avatar} from "@mui/material";

import { useSelector } from "react-redux";

function HeaderOption({avatar, Icon, title, onClick}) {
  const user= useSelector(state => state.user.user);
  return (
    <div className={styles.headerOption} onClick={onClick}>
        {Icon&& <Icon className={styles.icon}/>}
        {avatar&& <Avatar src={user.photoUrl} className={styles.icon} >{user?.email[0].toUpperCase()}</Avatar>}
        <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

export default HeaderOption 
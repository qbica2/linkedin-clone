import React from 'react'
import styles from './HeaderOption.module.css'
import {Avatar} from "@mui/material";

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className={styles.headerOption}>
        {Icon&& <Icon className={styles.icon}/>}
        {avatar&& <Avatar className={styles.icon} src={avatar} />}
        <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

export default HeaderOption 
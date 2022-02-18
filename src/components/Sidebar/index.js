import React from 'react'
import style from './Sidebar.module.css'
import {Avatar} from "@mui/material";

function Sidebar() {
  return (
    <div className={style.sidebar}>
        <div className={style.top}>
                <img src="" alt="" />
                <Avatar className={style.avatar}/>
                <h2 >Kubilay Akdemir</h2>
                <h4>Junior Frontend Developer</h4>
        </div>
        <div className={style.bottom}>  </div>
    </div>
  )
}

export default Sidebar;
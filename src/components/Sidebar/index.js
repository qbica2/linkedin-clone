import React from 'react'
import style from './Sidebar.module.css'
import { Avatar } from "@mui/material";

import { useSelector } from 'react-redux'

function Sidebar() {

  const user = useSelector(state => state.user.user)

  return (
    <div className={style.sidebar}>
        <div className={style.top}>
                <img src="https://picsum.photos/200/300" alt="" />
                <Avatar src={user.photoUrl} className={style.avatar}>{user?.email[0].toUpperCase()}</Avatar>
                <h2 >{user.displayName}</h2>
                <h4>{user.job|| user.email}</h4>
                <div className={style.connections}>
                    <div className={style.connectionsTop}>
                        <h4>Connections</h4>
                        <p>13</p>
                    </div>
                    <div className={style.connectionsTop}> 
                    <h3>Grow your network</h3>
                    </div>
                </div>
        </div>
        <div className={style.bottom}> 
            <div className={style.bottomTop}>
               <a href="#">Groups</a>
               <a href="#">Events</a>
               <a href="#">Followed Hashtags</a>
            </div>
            <div className={style.bottomBot}>
                Discover More
            </div>
         </div>
    </div>
  )
}

export default Sidebar;
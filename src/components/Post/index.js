import React from 'react'
import styles from './Post.module.css'
import {Avatar} from "@mui/material";
import InputOption from "../InputOption";

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className={styles.post}>
        <div className={styles.header}>
            <Avatar className={styles.avatar}></Avatar>
            <div className={styles.info}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className={styles.body}>
            <p>{message}</p>
        </div>
        <div className={styles.buttons}>
            <InputOption Icon={ThumbUpOutlinedIcon}  title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon}  title="Comment" color="gray"/>
            <InputOption Icon={ShortcutIcon}  title="Share" color="gray"/>
            <InputOption Icon={SendIcon}  title="Send" color="gray"/>
        </div>
    </div>
  )
}

export default Post
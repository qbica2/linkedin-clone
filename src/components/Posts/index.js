import React,{useState,useEffect} from "react";
import styles from "./Posts.module.css";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption";

import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';

import Post from "../Post";

function Posts() {
  return (
    <div className={styles.posts}>
      <div className={styles.inputContainer}>
        <div className={styles.inputTop}>
          <Avatar className={styles.avatar} />
          <form>
            <input type="text" placeholder="Start a post" />
          </form>
        </div>
        <div className={styles.inputBottom}>
          <InputOption Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
          <InputOption Icon={YouTubeIcon}  title="Video" color="#7fc15e"/>
          <InputOption Icon={EventNoteIcon}  title="Event" color="#E7a33e"/>
          <InputOption Icon={ViewDayIcon}  title="Write article" color="#fc9295"/>
        </div>
      </div>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
      <Post name="Kubilay Akdemir" description="Jr.Front-End Developer" message="blablabblablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalablablablalbalalalbala"/>
    </div>
  );
}

export default Posts;

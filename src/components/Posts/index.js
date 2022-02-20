import React,{useState,useEffect} from "react";
import styles from "./Posts.module.css";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption";

import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';

import Post from "../Post";

import { db } from "../../firebase";
import { collection, getDocs, addDoc, orderBy, serverTimestamp, onSnapshot, query} from "firebase/firestore"




function Posts() {

  const [input, setInput] = useState("");
  const [posts,setPosts] = useState([]);

  const postsCollectionRef = collection(db,"posts");
  

  useEffect(() => {
    const unsubscribe = onSnapshot(query(postsCollectionRef,orderBy("timestamp","desc")),snapshot => {
      setPosts(snapshot.docs.map(doc => ({ 
        id: doc.id,
        data: doc.data(),
      })))
    })
    return unsubscribe;
  },[]);

  const sendPost = async (e) =>{
    e.preventDefault();
    await addDoc(postsCollectionRef,{
      name:"Kubilay Akdemir",
      description:"Front End Developer",
      message: input,
      photoUrl:"",
      timestamp: serverTimestamp(),
    })
    setInput("");
}



  return (
    <div className={styles.posts}>
      <div className={styles.inputContainer}>
        <div className={styles.inputTop}>
          <Avatar className={styles.avatar} />
          <form onSubmit={sendPost}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Start a post" />
            
          </form>
        </div>
        <div className={styles.inputBottom}>
          <InputOption Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
          <InputOption Icon={YouTubeIcon}  title="Video" color="#7fc15e"/>
          <InputOption Icon={EventNoteIcon}  title="Event" color="#E7a33e"/>
          <InputOption Icon={ViewDayIcon}  title="Write article" color="#fc9295"/>
        </div>
      </div>
      {
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
        ))
      }
    </div>
  );
}

export default Posts;

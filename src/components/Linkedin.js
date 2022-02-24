import React, { useEffect } from 'react';
import "../App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Rightbar from "./Rightbar";
import Login from "./Login";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/UserSlice";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Linkedin() {

  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(login({
          email: currentUser.email,
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoUrl: currentUser.photoURL,
          job: currentUser.description,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])



  return (
    <>
      {
        !user ? (<Login />) : (
          <div className="app">
            <Header />
            <div className="main">
              <Sidebar />
              <Posts />
              <Rightbar />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Linkedin;
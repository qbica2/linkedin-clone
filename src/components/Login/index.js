import React, { useState } from 'react'
import style from "./Login.module.css"

import { useDispatch } from "react-redux";
import { login } from "../../redux/UserSlice";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [job, setJob] = useState('')

  const dispatch=useDispatch();

  const register =async () => {
    if(!name){
      alert("Name is required")
      return false
    }
    if(!job){
      alert("job is required")
      return false
    }
    if(!email){
      alert("Email is required")
      return false
    }
    if(!password){
      alert("Password is required")
      return false
    }
    try{
      const user= await createUserWithEmailAndPassword (auth, email, password)
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
        description: job,
      })
      // console.log(user)
       dispatch(login({
        email: user.user.email,
        uid: user.user.uid,
        displayName: user.user.displayName,
        photoUrl: user.user.photoURL,
        job: job,
      }))
    }catch(error){
      console.log(error.message)
    }
      
  }

  const logintoApp = async (e) => {
    e.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      dispatch(login({
        email: user.user.email,
        uid: user.user.uid,
        displayName: user.user.displayName,
        photoUrl: user.user.photoURL,
        job: job,
      }))
    }catch(error){
      console.log(error.message)
    }

  }

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 14"
          data-supported-dps="56x14"
          fill="#0A66C2"
          width="102"
          height="26"
          focusable="false"
        >
          <g>
            <path

              d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
            ></path>
          </g>
        </svg>
      </div>
      <form>
        <h1>Sign in</h1>
        <p>Stay uptated on your professional world</p>
        <input 
        type="text" 
        placeholder="Name (required if registering)" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Job (required if registering)" 
        value={job} 
        onChange={(e) => setJob(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Photo Url"
        value={photoUrl} 
        onChange={(e) => setPhotoUrl(e.target.value)} 
        />
        <input 
        type="email" 
        placeholder="Email" 
        required value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
        type="password" 
        placeholder="Password" 
        required 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button type='submit' onClick={logintoApp}>Sign in</button>
      </form>
      <p>New to Linkedin? <span className={style.register} onClick={register}>Join Now</span></p>
      <div className={style.footer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 14"
          data-supported-dps="56x14"
          fill="#000"
          width="56"
          height="14"
          focusable="false"
        >
          <g>
            <path

              d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
            ></path>
          </g>
        </svg>
        © 2022
        <a>User Agreement</a>
        <a>Privacy Policy</a>
        <a>Community Guidelines </a>
        <a>Cookie Policy</a>
        <a>Copyright Policy</a>
        <a>Send Feedback</a>
        <a>Language</a>
      </div>
    </div>
  )
}

export default Login;
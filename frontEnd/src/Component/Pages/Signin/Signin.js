import React, { useState } from 'react';
import './signin.css'
import axios from 'axios'


export const Signin = () => {

    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [accept ,setAccept] = useState(false)
    // const [flag,setFlag] = useState(true)
    const [emailError ,setEmailError] = useState("")
    // console.log(flag)
   async  function Submit (e){
      let flag = true;
        e.preventDefault()
        setAccept(true)
        if( password.length <8 ){
            flag = false
        } else flag = true

        try {
            if(flag){
          let  res =  await axios.post("http://127.0.0.1:8000/api/login",{
            email:email,
            password:password,

          })
          if(res.status === 200){
            window.localStorage.setItem('email',email)
            window.location.pathname = '/'
          }
     
        }
        } catch (error) {
          setEmailError(error.response.status)
        }
      
    } 
  return (
    <form onSubmit={Submit} style={{display:'flex',flexDirection:'column',width:'60vw',margin:'5rem auto',gap:'1rem'}}>
   
     
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      // name="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
    />
    {accept &&emailError ==422 &&<p className='error'>Email is already exist</p>}
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      // name="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required
    />
    {password.length <8 && accept&& <p className='error'>Please Enter Password more than 6</p>}
     
    <button type="submit">Sign In</button>
  </form>
  )
}

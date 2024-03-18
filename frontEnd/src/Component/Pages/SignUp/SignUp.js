import React, { useState } from 'react';
import './signup.css'
import axios from 'axios'

const SignUp= () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  
  // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Handle form submission logic here (e.g., send data to server)
    //   console.log('Form submitted:', formData);
    //   // Clear the form after submission (optional)
    //   setFormData({ name: '', email: '', password: '' });
    // };


    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [passwordR ,setPasswordR] = useState("")
    const [accept ,setAccept] = useState(false)
    // const [flag,setFlag] = useState(true)
    const [emailError ,setEmailError] = useState("")
    // console.log(flag)
   async  function Submit (e){
      let flag = true;
        e.preventDefault()
        setAccept(true)
      //   if(name === ""|| password.length <8 || passwordR !== password){
      //     flag = false
      // } else{
      //   let  res =axios.post("http://127.0.0.1:8000/api/register",{
      //     name:name,
      //     email:email,
      //     password:password,
      //     password_confirmation:passwordR,

      //   })
      //   .then((res)=>console.log(res))
      // }
        if(name === ""|| password.length <8 || passwordR !== password){
            flag = false
        } else flag = true

        try {
            if(flag){
          let  res =  await axios.post("http://127.0.0.1:8000/api/register",{
            name:name,
            email:email,
            password:password,
            password_confirmation:passwordR,

          })
     
          if (res.status === 200) {
            try {
              // Store email in local storage (considering potential errors)
              localStorage.setItem('email', email);
          
              // Redirect to the desired path after successful storage
              window.location.pathname = '/';
            } catch (error) {
              // Handle storage errors gracefully (optional)
              console.error('Error storing email in local storage:', error);
              // You can display an error message to the user here (if applicable)
            }}
        }
        } catch (error) {
          setEmailError(error.response.status)
        }
      
    } 

  return (
    <form onSubmit={Submit} style={{display:'flex',flexDirection:'column',width:'60vw',margin:'5rem auto',gap:'1rem'}}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        // name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />
       {name === ''  && accept&& <p  className='error'>UserName is required</p>}
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
        <label htmlFor="passwordR">Retype Password</label>
      <input
        type="password"
        id="passwordR"
        // name="password"
        value={passwordR}
        onChange={(e)=>setPasswordR(e.target.value)}
        required
      />
      {passwordR !== password  && accept&& <p className='error'>Passwords are different</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;

import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
const [state,setState] =useState({username:"",email:"",password:"",firstname:""})
const [error,setError]=useState(null)
const navigate=useNavigate()


const inputHandler=(e)=>{
 setState({...state,[e.target.name]:e.target.value})
}

const registerFormSubmit=async (e)=>{
  e.preventDefault()
  try {
    let result = await axios.post('http://localhost:3003/api/auth/register', state);
    console.log(result.data.message,); // Check the response data
    navigate('/login')

  } catch (error) {
    setError(error.response.data.message)
    console.log(error.response.data.message); // Check the error response
    // navigate("/login")
  }
} 

  return (
    <div className='auth'> 
      <h1>Register</h1>
      <form action="" onSubmit={registerFormSubmit}>
        <input type="text" name="username" value={state.username}  placeholder='Username' onChange={inputHandler}/>
        <input type="text" name="firstname" value={state.firstname}  placeholder='Firstname' onChange={inputHandler}/>
        <input type="email" name="email" value={state.email}placeholder='Email' onChange={inputHandler}/>
        <input type="password" name="password" value={state.password} placeholder='Password' onChange={inputHandler}/>  
        <button>Register</button>  
        {error?<p>{error}</p>:null}
        <span>Already have an account ? <Link to ="/login">Login</Link></span>
      </form>
      </div>
  )
}

export default Register
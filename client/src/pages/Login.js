import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
// import {login} from "../context/authContext"
// import { login } from '../context/authContext'

const Login = () => {
  const [state,setState] =useState({username:"",password:""})
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  const {currentUser,login} =useContext(AuthContext)
  // console.log("----------------------");
  // console.log(currentUser);
  // console.log("----------------------");
  const inputHandler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  
  const registerFormSubmit=async (e)=>{              
    // const { login } = useContext(authContext);
    e.preventDefault()
    try {
     await login(state)
      // let result = await axios.post('http://localhost:3003/api/auth/login', state,{ withCredentials: true });
      // console.log(result); // Check the response data
       navigate("/")
    } catch (error) {
      setError(error.response.data.message)  
      // navigate("/login")
    }
  }
  
    return (
      <div className='auth'> 
        <h1>Login</h1>
        <form action="" onSubmit={registerFormSubmit}>
          <input type="text" name="username" value={state.username}  placeholder='Username' onChange={inputHandler}/>
          <input type="password" name="password" value={state.password} placeholder='Password' onChange={inputHandler}/>  
          <button>Login</button>  
          {error?<p>{error}</p>:null}
          <span>Already have an account ? <Link to ="/register">Register</Link></span>
        </form>
        </div>
    )
  }


export default Login
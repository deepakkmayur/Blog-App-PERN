import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" name="" id="" placeholder='Username' />
        <input type="password" name="" id="" placeholder='Password' />
        <button>Login</button>  
        <p>This is an error message</p>
        <span>Don't have an account ? <Link to ="/register">Register</Link></span>
      </form>
      </div>
  )
}

export default Login
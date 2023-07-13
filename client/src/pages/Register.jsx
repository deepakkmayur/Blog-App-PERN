
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input type="text" name="" id="" placeholder='Username' />
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="password" name="password" id="" placeholder='Password' />  
        <button>Login</button>  
        <p>This is an error message</p>
        <span>Already have an account ? <Link to ="/login">Login</Link></span>
      </form>
      </div>
  )
}

export default Register
import React, { useContext } from 'react'
import Logo from '../images/deepakimagelatest.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser,logout} =useContext(AuthContext)
  console.log(currentUser,"----nav bar currentUser-----");
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/"></Link>
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>  
          <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
          <span>{currentUser?.firstname}</span>
         {currentUser?<span onClick={logout}>Logout</span>:<Link to="/login">Login</Link>}
          <span className='write'>
          <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Navbar
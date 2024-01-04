import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from "moment"
import { AuthContext } from '../context/AuthContext'
 
const SinglePage = () => {
  const [post,setPost]=useState({})

  const location=useLocation().pathname
  const navigate=useNavigate()
  const postId=location.split("/")[2]
  console.log(postId,"-------postId----------------");
  // console.log(location,"location///////////////////");   
  
  const {currentUser}=useContext(AuthContext)

  useEffect(()=>{
    const fetchData=async ()=>{
        try {
      //  const response=await axios.get("http://localhost:3003/api/posts")
       const response=await axios.get(`http://localhost:3003/api/posts/${postId}`)
       console.log(response,"response in SinglePage page----------");  

    
       setPost(response.data)
      } catch (error) {
        console.log("............");
        console.log(error,"//login page//");
      }
    }
    fetchData()
  },[postId])
  // console.log(post,"post=======");

  const handleDelete =async()=>{
      await axios.delete(`http://localhost:3003/api/posts/${postId}`)
      navigate("/")
  }

  return (
    <div className='single'>
      <div className="content">
        {/* <img src="https://tse1.mm.bing.net/th?id=OIP.mQv5x97qtno9t08G-Wm_cAHaEK&pid=Api&P=0&h=180" alt="" /> */}
        <img src={post.postimage} alt="loading" />
        <div className="user">
          {/* <img src=" https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180" alt="" /> */}
          {post.userimage && <img src={post.userimage} alt="user image" />}
         <div className="info">  
          <span >Deepak</span>
          <p style={{ margin: '0' }}>posted {moment(post.date).fromNow()}</p>

         </div>
      {currentUser.username===post.username &&  <div className="edit">
         <img onClick={handleDelete} src={ Delete} alt=""/>
        <Link to={`/write/edit=2`}>
           <img src={ Edit} alt=""/>
           </Link>
         </div>
         }

        </div>
         <h1>{post.title}</h1>
        {post.desc} 
      </div>
        <Menu/>
      {/* <div className="menu">m</div> */}
    </div>
  )
}

export default SinglePage
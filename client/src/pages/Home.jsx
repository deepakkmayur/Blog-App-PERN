import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem 1",
      desc: "voluptas veritatis minus nisi quam illum nostrum assumenda ipsam ex quidem.",
      img: " https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180"
    },
    {
      id: 2,
      title: "Lorem 2",
      desc: "voluptas veritatis minus nisi quam illum nostrum assumenda ipsam ex quidem.",
      img: " https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180"
    }, {
      id: 3,
      title: "Lorem 3",
      desc: "voluptas veritatis minus nisi quam illum nostrum assumenda ipsam ex quidem.",
      img: " https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180"
    }, {
      id: 4,
      title: "Lorem 4",
      desc: "voluptas veritatis minus nisi quam illum nostrum assumenda ipsam ex quidem.",
      img: "https://tse3.mm.bing.net/th?id=OIP.4agJIKMTdAF0q6pQl_GVmQHaMd&pid=Api&P=0&h=180"
    }, {
      id: 5,
      title: "Lorem 5",
      desc: "voluptas veritatis minus nisi quam illum nostrum assumenda ipsam ex quidem.",
      img: " https://tse1.mm.bing.net/th?id=OIP.mQv5x97qtno9t08G-Wm_cAHaEK&pid=Api&P=0&h=180"
    }
  ]
  console.log("home here");

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((singlePost) => (
          < div className='singlePost' key={singlePost.id}>
            <div className="img">
            <img src={singlePost.img} alt="" />

            </div>
           <div className="content">  
            <Link className='link' to={`/post/${singlePost.id}`}>   <h1>{singlePost.title}</h1>  </Link>
            <p>{singlePost.desc}</p>
            <button>Read more...</button>    
           </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
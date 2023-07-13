import React from 'react'

const Menu = () => {
   const posts = [
      {
        id: 1,
        title: "Lorem 1 sdffsf sfdff sdfsfsdfdsfasdfds",
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
      }]
  return (
  <div className="menu">
   <h2>other posts you may like</h2>
   {posts.map((eachPost)=>(
      <div className='post' key={eachPost.id}>
         <img src={eachPost.img} alt="" />
         <h2>{eachPost.title}</h2>
         <button>Read more...</button>
      </div>
   ))}
  </div>
  )
}

export default Menu
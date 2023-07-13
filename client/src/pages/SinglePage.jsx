import React from 'react'
import { Link } from 'react-router-dom'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import Menu from '../components/Menu'

const SinglePage = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://tse1.mm.bing.net/th?id=OIP.mQv5x97qtno9t08G-Wm_cAHaEK&pid=Api&P=0&h=180" alt="" />
        <div className="user">
          <img src=" https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180" alt="" />
         <div className="info">  
          <span >Deepak</span>
          <p style={{ margin:'0' }}>posted two days ago</p> 
         </div>
         <div className="edit">
         <img src={ Delete} alt=""/>
        <Link to={`/write/edit=2`}> <img src={ Edit} alt=""/></Link>
         </div>
        </div>
         <h1>Lorem ipsum dolor sit Sapiente voluptates vitae maiores.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, debitis dolorem modi beatae, eius at ullam corporis vero omnis cum itaque doloremque deserunt reprehenderit dolores nemo, quod eaque recusandae commodi?
        Exercitationem quos vitae sed nesciunt culpa similique tenetur accusantium cupiditate vero, numquam at neque, obcaecati possimus labore beatae quidem eius, impedit quis facilis doloribus pariatur cumque voluptatum itaque? Sed, corrupti.
        Eos, ad. Repellat, obcaecati, porro corporis in quia ad itaque a accusantium, delectus officiis quo magni nihil corrupti fuga dignissimos dolorem sit sunt tenetur atque repellendus sequi suscipit labore? Reiciendis?
        Quis, quae odit perferendis necessitatibus totam id et deleniti fuga laborum autem sit repellat rem, iste veniam similique, obcaecati at velit magnam quia dolorem nam! Quae nulla ipsam quas accusantium!
        Alias eligendi dolore et tempore consequatur itaque consectetur, maiores, dignissimos expedita magni eius libero voluptates doloremque cupiditate repellat adipisci reiciendis vero veritatis dolor quis officiis numquam illum ad eum! Soluta!
        </p>
      </div>
        <Menu/>
      {/* <div className="menu">m</div> */}
    </div>
  )
}

export default SinglePage
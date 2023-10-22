import React from 'react';
import "./viewSingleBlog.scss"
import editicon from "../../assests/edit.png"
import deleteicon from "../../assests/delete.png"
import user from "../../assests/viewPhoto.png"

function ViewSingleBlog()
{
 return(
   <div className='single'>
      <div className='content'>
      <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Broken"></img>
     <div className="user">
       <img src={user} alt="broken"></img>
       <div className='info'>
       <span>
        Ajay
       </span>
       <p>Posted 2 days ago</p>

       </div>

     </div>
     
      </div>
      <div className='menu'>m</div>

   </div>
 )
}
export default ViewSingleBlog
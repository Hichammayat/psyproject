import React from 'react';
import'./SinglePost.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Menu from '../Menu/Menu';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  
  const { id } = useParams();
  const post = post.find((post) => post.id === parseInt(id));
  

   
  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          <img
            src="DSC_2342.jpg"
            alt=""
          />
          <div className="info">
            <span>john</span>
            <p>Posted 2 days ago </p>
          </div>
          
            <div className="edit">
              
                <EditIcon style={{width:"30px",height:"30px",cursor:"pointer",backgroundColor:"green",borderRadius:"50%"}}/>
              
              <DeleteForeverIcon style={{width:"30px",height:"30px",cursor:"pointer",backgroundColor:"red",borderRadius:"50%"}}/>
              <FavoriteBorderIcon style={{width:"30px",height:"30px",cursor:"pointer",borderRadius:"50%"}}/>
            </div>
         
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>     
         </div>
      <Menu/>
    </div>
  )
}

export default SinglePost
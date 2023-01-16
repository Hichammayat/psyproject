import React from 'react';
import'./SinglePost.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Menu from '../Menu/Menu';
const SinglePost = () => {

   
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
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
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            <br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            <br />
        </p>     
         </div>
      <Menu/>
    </div>
  )
}

export default SinglePost
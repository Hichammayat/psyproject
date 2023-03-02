import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPostid } from '../../../../redux/Blog-reducer'
import { Link } from 'react-router-dom';

function BlogPsy() {
  const dispatch = useDispatch()
  const getPsyId = JSON.parse(localStorage.getItem ('user'));
  useEffect(() =>{
    dispatch(getPostid({psychiatre_id:getPsyId._id}))
    },[])
    const blogList = useSelector(state=>state.BlogStore.Blog)
    
  return (
    <>
    
    <div className="Blog">
      <div className="posts">
        {blogList.map((post) => (
          <>
           
          <div className="post" key={post._id}>
            <div className="img-Blog">
              <img src="https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="post-content">
              
                <h1>{post.title}</h1>
              
              <p>{post.desc}</p>
              <Link to={`/post/${post._id}`}>
              
              <button>Read More</button>
              </Link>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default BlogPsy
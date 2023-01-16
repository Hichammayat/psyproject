import React from 'react'
import ReactQuill from "react-quill";
import {useDispatch} from "react-redux"
import "react-quill/dist/quill.snow.css";
import PostModals from '../../../../Modals/PostModals';
import { useState } from "react";
import { AddBlog } from '../../../../redux/Blog-reducer';
import'./Write.css'

const Write = () => {
    const dispatch = useDispatch()
    const getPsychiatreId = JSON.parse(localStorage.getItem('psychiatre'))
    const [newblog,setNewblog] =useState(new PostModals([],getPsychiatreId._id));
  return (
    <div className='add'>
        <div className='content'>
            <input type="text" placeholder='Title' onChange={(e) => setNewblog({...newblog, title : e.target.value})}/>
            <div className='editorContainer'>
            <ReactQuill
            className="editor"
            theme="snow"
            
            onChange={(e) => setNewblog({...newblog, desc: e.target.value})}
            />
            </div>
        </div>
        <div className='menu'>
            <div className='item'>
                <h1>Publish</h1>
                <span>
                    <b>Status:</b>Draft
                </span>
                <span>
                    <b>Visibility:</b>Public
                </span>
                <input style={{display:"none"}} type="file" id="file" name=""/>
                <label htmlFor='file'>Upload Image</label>
                <div className='buttons'>
                    <button className='btn-shild1' onClick={() =>dispatch(AddBlog({id:getPsychiatreId._id,Blog : newblog}))}>Save as a draft</button>
                    <button className='ntm-shild2'>Update</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Write
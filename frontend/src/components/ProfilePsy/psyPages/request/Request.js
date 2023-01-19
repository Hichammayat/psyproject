import React, { useEffect } from 'react'
import'./request.css'
import {useDispatch,useSelector} from "react-redux"
import { getNotif } from '../../../../redux/notifyer'


const Request = () => {
  const dispatch = useDispatch()
  const getPsyId = JSON.parse(localStorage.getItem ('psychiatre'));
   useEffect(()=>{
    dispatch(getNotif({psychiatre_id:getPsyId._id}))
  },[])
  
  return (
    <>
    <div className='request-div'>
    <div className="container">
    <div className="card">
      <div className='top-card'>
        <img  className='img-card' src="DSC_2342.jpg"></img>
      </div>
      <div className='info-card'>
        <h2>hicham</h2>
        <h3>admis</h3>
      </div>
      <div className='button-card'>
        <button style={{border:"green",color:"green"}}>valider</button>
        <button style={{border:"red",color:"red"}}>refuser</button>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Request
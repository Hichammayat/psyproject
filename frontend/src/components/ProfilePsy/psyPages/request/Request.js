import React, { useEffect } from 'react'
import'./request.css'
import {useDispatch,useSelector} from "react-redux"
import { getNotif } from '../../../../redux/notifyer'



const Request = () => {
  const dispatch = useDispatch()
  const { notifications, users } = useSelector((state) => state.Notification.Notification);

  console.log(notifications)
  console.log(users)
  const getPsyId = JSON.parse(localStorage.getItem ('user'));
   useEffect(()=>{
    dispatch(getNotif({psychiatre_id:getPsyId._id}))
  },[]);
  
  
  return (
    <div className='request-div'>
      {notifications?notifications.map(notification => {
        const user = users.find(user => user._id === notification.user_id);
        const userName = user ? user.Firstname : "";
        return (
          <div key={notification._id} className="container">
            <div className="card">
              <div className='top-card'>
                <img className='img-card' src="DSC_2342.jpg"></img>
              </div>
              <div className='info-card'>
                
                <h3>{userName}</h3>
              </div>
              <div className='button-card'>
                <button style={{ border: "green", color: "green" }}>valider</button>
                <button style={{ border: "red", color: "red" }}>refuser</button>
              </div>
            </div>
          </div>
        )
      }):null}
    </div>
  )
}

export default Request
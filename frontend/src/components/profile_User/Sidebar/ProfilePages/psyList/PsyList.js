import React,{useEffect, useState} from 'react'
import"./PsyList.css"
import NotificationModal from '../../../../../Modals/Notification'
import {useDispatch, useSelector} from "react-redux"
import { GetPsychiatreList } from '../../../../../redux/psy-reducer'
import { SendNotif } from '../../../../../redux/notifyer'

const PsyList = () => {
  const dispatch = useDispatch()
  const getUserId = JSON.parse(localStorage.getItem('user'))
    useEffect(() =>{
    dispatch(GetPsychiatreList())
    },[])

const psychiatreList = useSelector(state => state.PsyInscription.psychiatre)
const [newNotif,setNewNotif] = useState()
console.log(psychiatreList)
  return (
    <>
    
    <div className="List-profile">
      <div className="Profils">
      {
        psychiatreList.map(item =>( 
          <div className="Profile" key={item._id} >
            <div className="img">
              <img src="profile pic.png"  alt="" />
            </div>
            <div className="Profile-content">
             <h1>{item.Firstname}  {item.Lastname}</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
             <button
             onClick={()=>{
              setNewNotif(new NotificationModal(item._id,getUserId._id));
              dispatch(SendNotif({Notif:newNotif}) )}}
              /*onClick={()=>dispatch(SendNotif({user_id:getUserId._id,psychiatre_id:item._id}))}*/
              >choisir ce psychologue</button>
            </div>
          </div>
          ))}
      </div>
    </div>
    
    </>
  )
}

export default PsyList
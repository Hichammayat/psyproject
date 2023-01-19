import React,{useEffect} from 'react'
import"./PsyList.css"
import Footer from '../../../../Footer/Footer'
import {useDispatch, useSelector} from "react-redux"
import { GetPsychiatreList } from '../../../../../redux/psy-reducer'
import { SendNotif } from '../../../../../redux/notifyer'
import SideBar from '../../SideBar'
const PsyList = () => {
  const dispatch = useDispatch()

    useEffect(() =>{
    dispatch(GetPsychiatreList())
    },[])

const psychiatreList = useSelector(state => state.PsyInscription.psychiatre)
console.log(psychiatreList)
  return (
    <>
    <SideBar/>
    <div className="List-profile">
      <div className="Profils">
      {
        psychiatreList.map(item =>( 
          <div className="Profile" >
            <div className="img">
              <img src="DSC_2342.jpg" alt="" />
            </div>
            <div className="Profile-content">
             <h1>{item.Firstname}</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
             <button onClick={dispatch(SendNotif)}>choisir ce psychologue</button>
            </div>
          </div>
          ))}
      </div>
    </div>
    
    </>
  )
}

export default PsyList
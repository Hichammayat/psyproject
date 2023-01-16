import React, { useState } from 'react';
import './PsyInscription.css'

import PsyApplyModal from '../../Modals/PsyApplyModals'
import axios from'axios'

import { Link } from 'react-router-dom'

const PsyInscription = () => {
  const [fileCv,setFileCv] = useState()
  const [apply,setApply] =useState(new PsyApplyModal())
  
const getCv=()=>{
    const file =new FormData()
    file.append("resume", fileCv)
    axios.post('http://localhost:9000/getCv',file)
    .then(res =>{return res.data})
    .catch(err => {return err})
  }
const newPsy=()=>{
    
    axios.post('http://localhost:9000/postuler',apply)
    .then(res =>{getCv()})
    .catch(err => {return err})
};

const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='PsyInscription'>
       <form onSubmit={(e=>{handleSubmit(e)})} className="info-Form" >
        <h3 style={{color:"white"}}>postuler ma candidature</h3>
        <div>
          <input
            onChange={(e) => {
              setApply({ ...apply, Firstname: e.target.value });
            }}
            type="text"
            placeholder="First Name"
            name="firstname"
            className="infoinput"
          />
          <input
            onChange={(e) => {
              setApply({ ...apply, Lastname: e.target.value });
            }}
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoinput"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply, Email: e.target.value });
            }}
          />
        </div>
        <div>
         <input 
         onChange={(e) => {
          setApply({ ...apply, Password: e.target.value });
        }}
         type="Password"
         className='infoinput'
         name='password'
         placeholder='Password'
         />
         

         </div>

        <div>
          <input
            type="text"
            placeholder="Lives in"
            name="livesIn"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply,Location : e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply,Occupation : e.target.value });
            }}
          />
        </div>

        

        <div style={{color:"white"}}>
          Votre CV
          <input 
            type="file"
            name="resume"
            onChange={(e)=> setFileCv(e.target.files[0])} />
         
        </div>
        <div>
            <Link to="/LoginPsy">
             <span className='span-form' style={{color:"white"}} >Already have an account. Login!</span>
             </Link>
         </div>

        <button 
          className="button infoButton"
          type="submit"
          onClick={()=>newPsy()} >
          apply
        </button>
      </form>
    </div>
  )
}

export default PsyInscription
import React ,{useState}from 'react'
import './Auth.css'
import axios from'axios'
import SignupModal from '../../Modals/SignupModals'

import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'



function Authsec() {
  const [signup, setSignup] = useState(new SignupModal());
  const newAccount=()=>{
    axios.post('http://localhost:9000/register',signup)
    .then(res =>{return res.data})
    .catch(err => {return err})
};

  return (
    <>
    <div className='auth'>
        <div className='a-left'>
          
            <div className='webname'>
            <video autoPlay loop muted playsInline className='video'>
              <source src='salut (1).mp4'/>
            </video>
            </div>
            
        </div>
        <div className='a-right'>
     <div className='info-form'>
         <h3>Sign up</h3>
         <div>
         <input 
          onChange={(e) => {
            setSignup({ ...signup, Firstname: e.target.value });
          }}
          type='text'
          placeholder="first name"
          className='infoinput'
          name='firstname' />
          <input 
          onChange={(e) => {
            setSignup({ ...signup, Lastname: e.target.value });
          }}
          type='text'
          placeholder="last name"
          className='infoinput'
          name='lastname' />
         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Email: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='Email'
         placeholder='Email'
         />

         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Password: e.target.value });
        }}
         type="Password"
         className='infoinput'
         name='password'
         placeholder='Password'
         />
         

         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Occupation: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='occupation'
         placeholder='occupation'
         />
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Location: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='location'
         placeholder='location'
         />

         </div>
         <div>
            <Link to="/Signin">
             <span className='span-form' style={{color:"white"}} >Already have an account. Login!</span>
             </Link>
         </div>
         <button onClick={() => {
             newAccount();
            }} className=' infoButton'>Signup</button>

         </div>
         </div>
        
        

    </div>
    <Footer/>
    </>
    
  )
}


export default Authsec
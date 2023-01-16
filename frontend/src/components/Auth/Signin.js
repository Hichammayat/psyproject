import React,{useState} from 'react'
import './Auth.css'
import{useDispatch,useSelector} from'react-redux'
import {useNavigate} from "react-router-dom"
import { checkUser } from '../../redux/auth-reducer'
import { Link } from 'react-router-dom'

function Auth() {
  const navigate = useNavigate();

  const Err = useSelector(state => state.Auth.Erreur)
  const dispatch = useDispatch()
    const [signin, setSignin] = useState({
      Email:"",
      Password:""
    });
    const Signin = () => {
      
      dispatch(checkUser({userAccount :signin })).then(
        res =>{
          console.log(res)

          if(typeof res.payload === 'object') navigate('/Hellopage')
        }
      )
     };



  return (
    <div className='auth'>
        <div className='a-left'>
          
            <div className='webname'>
            <img src='salut.png' alt=''/>
              
            </div>
            
        </div>
        <div className='a-right'>
    <div className='info-form'>
        <h3>Sign in</h3>
        <p className='Err'  style={{color:"red"}}>{Err}</p>
        <div>
            <input 
            type="text"
            className='infoinput'
            name='Email'
            placeholder='Email'
            onChange={(e) => {
              setSignin({ ...signin,Email: e.target.value });
            }}
            />

        </div>
        <div>
            <input 
            type="password"
            className='infoinput'
            name='password'
            placeholder='Password'
            onChange={(e) => {
              setSignin({ ...signin,Password: e.target.value });
            }}
            />
            

        </div>
        <div>
            <Link to="/Signup">
            <span className='span-form' style={{color:"white"}} >Don't have an account Sign up</span>
            </Link>
        </div>
        
        <button 
        onClick={() => {
          Signin()
         }}
        className=' infoButton'>Login</button>
        

    </div>
    
</div>
    </div>
    
  )
}


export default Auth
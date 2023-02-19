import React,{useState} from 'react'
import './LoginPsy.css'
import{useDispatch,useSelector} from'react-redux'
import {useNavigate} from "react-router-dom"
import { checkPsy } from '../../redux/psy-reducer'
import { Link } from 'react-router-dom'

function LoginPsy(props) {
  const navigate = useNavigate();
  const handleNavigation = props.handleNavigation

  const Err = useSelector(state => state.PsyInscription.Erreur)
  const dispatch = useDispatch()
    const [login, setLogin] = useState({
      Email:"",
      Password:""
    });
    const LoginPsy = () => {
      
      dispatch(checkPsy({psyAccount :login })).then(
        res =>{
          console.log(res)

          if(typeof res.payload === 'object') {
            handleNavigation("psy");
            navigate('/Write')}
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
        <h3>Se connecter</h3>
        <p className='Err'  style={{color:"red"}}>{Err}</p>
        <div>
            <input 
            type="text"
            className='infoinput'
            name='Email'
            placeholder='Email'
            onChange={(e) => {
              setLogin({ ...login,Email: e.target.value });
            }}
            />

        </div>
        <div>
            <input 
            type="password"
            className='infoinput'
            name='password'
            placeholder='Mot de pass'
            onChange={(e) => {
              setLogin({ ...login,Password: e.target.value });
            }}
            />
            

        </div>
        
        
        <button 
        onClick={() => {
            LoginPsy()
         }}
        className='btn infoButton'>Se connecter</button>
        

    </div>
    
</div>
    </div>
    
  )
}


export default LoginPsy
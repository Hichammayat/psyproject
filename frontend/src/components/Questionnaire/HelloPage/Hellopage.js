import React from 'react'
import './Hellopage.css'
import { Link } from 'react-router-dom'

function Hellopage() {
  return (
    <div className='Questionnaire'>
        <div className='question-form'>
          <div className='top-section'>
            <span>commencez par repondre a cet questionnaire</span>
            </div>
          <div className='bottom-section'>
            <Link to="/Questionnaire">
            <button className='btn'>commencer</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Hellopage
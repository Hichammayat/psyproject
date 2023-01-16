import React from 'react'
import './Hellopage.css'
import { Link } from 'react-router-dom'

function Hellopage() {
  return (
    <div className='Questionnaire'>
        <div className='question-form'>
            <span>commencez par repondre a cet questionnaire</span>
            <Link to="/Questionnaire">
            <button className='btn'>commencer</button>
            </Link>
        </div>
    </div>
  )
}

export default Hellopage
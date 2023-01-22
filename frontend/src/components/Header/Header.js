import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <img  src='salut (2).png' alt='' className='logo' />
        <ul className='header-menu'>
            <li>Pourquoi Psyenergy</li>
            <Link to='/PsyInscription'>
            <li>Professionnels</li>
            </Link>
            <Link to="/Blog">
            <li>Blog</li>
            </Link>
            <li>FAQ</li>
        </ul>
    </div>
  )
}

export default Header
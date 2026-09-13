import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink to={'/login'}>LogIn</NavLink>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
                <NavLink to={'/'}>Home</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
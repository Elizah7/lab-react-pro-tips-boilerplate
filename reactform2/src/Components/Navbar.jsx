import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/"><h1>Kalvium</h1></Link>
        <Link to="/contact"><h1>Contact Page</h1></Link>
        <Link to="/registration"><h1>Registration Page</h1></Link>
    </div>
  )
}

export default Navbar

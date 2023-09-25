import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/");  
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <h1 onClick={handleNavigate}>TravelLine</h1>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
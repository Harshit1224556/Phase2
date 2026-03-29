import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">💰 FinTrack</div>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/expense" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Expense
          </NavLink>
          <NavLink to="/budget" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Budget
          </NavLink>
          <NavLink to="/transcation" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Transcation
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
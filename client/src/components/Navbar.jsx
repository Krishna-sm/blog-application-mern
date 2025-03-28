import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blog Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="btn btn-primary" to="/create">Create</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
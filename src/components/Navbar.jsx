import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">HF Collection</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="" className="btn btn-outline-dark ms-2">
                <i className='fa fa-sign-in me-1'></i> Login</Link>
              <Link to="" className="btn btn-outline-dark ms-2">
                <i className='fa fa-user-plus me-1'></i> Register</Link>
              <Link to="" className="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1'></i> Cart(0)</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
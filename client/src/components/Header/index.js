import React from 'react';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./Header.css"


const Header = () =>{
  return (
    <nav class="navbar">
    
    <div class="logo">Health Care App</div>
    
    <ul className='nav-links'>
    <li className='nav-links'>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Signup">Signup</Link>
    </li>
    <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>

    </ul>
    </nav>
  );

}
export default Header;

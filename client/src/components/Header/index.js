import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"


const Header = () =>{
  return (
    <nav class="navbar">
    
    <div class="logo">Health Care Project 3</div>
    
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

    </ul>
    </nav>
  );

}
export default Header;

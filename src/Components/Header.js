import React from 'react'
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Filters from '../Components/Filter'

const Header = () => {
  const [search, setSearch] = useState('');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);

    };

    const handleSearchChange = (e) => setSearch(e.target.value);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a >Team</a>
        </div>
        <div className="menu-toggle" onClick={toggleNav}>
          <span>&#9776;</span>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
         <Link to="/"><li><a href="/">Home</a></li> </Link> 
        <Link to="/team"><li><a href="/team">Team</a></li></Link>  
        <Link to="adduser"><li><a href="/adduser">Add User</a></li></Link>  
        </ul>
      </nav>
    </header>
  );
};

export default Header

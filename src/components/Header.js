// src/components/Header.js
import React from 'react';


const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">Logo</div>
        <nav className="nav-links">
          <a href="/home" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <div className="dropdown">
            <a href="/service">Services &#9662;</a>
            <ul className="dropdown-content">
              <li><a href="engage">Engage</a></li>
              <li><a href="/pont">Pontificate</a></li>
              <li><a href="/synergize">Synergize</a></li>
            </ul>
          </div>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

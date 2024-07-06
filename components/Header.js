// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="search">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </div>
        <div className="title">
          <h1>Wanderlust HUB</h1>
        </div>
        <div className="actions">
          <button>Sign In</button>
          <button>Join Now</button>
        </div>
      </div>
      <div>
        <ul>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">TAGS</a></li>
          <li><a href="#">AUTHORS</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">MEMBERSHIP</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">MORE</a></li>
          <li><a href="#">SIGN IN</a></li>
          <li><a href="#">JOIN NOW</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [navlinks] = useState([
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about",
      name: "About",
    },
    {
      to: "/our-programs",
      name: "Our Programs",
    },
    {
      to: "/gallery",
      name: "Gallery",
    },
    {
      to: "/news",
      name: "News",
    },
    {
      to: "/downloads",
      name: "Downloads",
    },
    {
      to: "/admission",
      name: "Admission",
    },
    {
      to: "/entrance-preparation",
      name: "Entrance Preparation",
    },
    {
      to: "/contact-us",
      name: "Contact Us",
    },
  ]);
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg navbar-light _content _navbar_main'>
        <NavLink className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {navlinks.map((item, index) => (
              <li key={index} className='nav-item'>
                <NavLink
                  activeClassName='active'
                  className='nav-link'
                  to={item.to}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

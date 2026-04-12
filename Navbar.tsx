// Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="desktop-navigation">
        <li><a href="/about">About</a></li> {/* Updated link */}
        {/* Other links */}
      </ul>
      <div className="mobile-dropdown">
        <button>Menu</button>
        <div className="dropdown-content">
          <a href="/about">About</a> {/* Updated link in mobile dropdown */}
          {/* Other links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
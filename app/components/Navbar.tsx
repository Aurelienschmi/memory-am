import React from 'react';
import Image from 'next/image';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Image src="/images/repetto-logo.png" alt="Repetto" width={150} height={50} />
      <ul className="navbar-menu">
        <li>COLLECTION PRINTEMPS</li>
        <li>CHAUSSURES</li>
        <li>LA BALLERINE</li>
        <li>SACS</li>
        <li>ACTIVEWEAR</li>
        <li>DANSE</li>
      </ul>
    </nav>
  );
};

export default Navbar;
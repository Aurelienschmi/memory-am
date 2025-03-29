import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <Image src="/images/repetto-logo.png" alt="Repetto" width={350} height={50} />
      </Link>
      <ul className="navbar-menu">
        <li>COLLECTION PRINTEMPS</li>
        <li>CHAUSSURES</li>
        <li>SACS</li>
        <li>ACTIVEWEAR</li>
        <li>DANSE</li>
      </ul>
    </nav>
  );
};

export default Navbar;
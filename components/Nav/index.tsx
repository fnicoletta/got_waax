import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Products', link: '/products' },
  { name: 'Contact', link: '/contact' },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenNav = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/static/cropped_logo.png"
          alt="logo"
          width="200"
          height="150"
        />
      </div>
      <ul className={styles.hamburger} onClick={handleOpenNav}>
        <li className={styles.line}></li>
        <li className={styles.line}></li>
        <li className={styles.line}></li>
      </ul>

      <div className={isMenuOpen ? styles.openMenu : styles.closeMenu}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.link as string}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

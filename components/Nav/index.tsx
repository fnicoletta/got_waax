import Image from "next/image";
import React from "react";
import styles from "./Nav.module.scss";

const navItems = ["Home", "About", "Products", "Contact"];

const Nav: React.FC = () => {
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
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

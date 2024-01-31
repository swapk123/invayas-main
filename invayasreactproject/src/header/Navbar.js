import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/invayasLogo.png";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>

      <div className={styles.logoSection}>
        <img className={styles.invayasLogo} src={logo} alt=""/>
      </div>
         
        <div className={styles.navbarContents}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div> 

      <div className={styles.serviceContactBtn}>
        <button type="button" className={styles.callBtn}>Call</button>
        <button type="button" className={styles.emailBtn}>Email</button>
        <button type="button" className={styles.whatsAppBtn}>WhatsApp</button>
      </div>

    </nav>
  );
};
export default Navbar;

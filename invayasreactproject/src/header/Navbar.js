import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/invayasLogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img className={styles.invayasLogo} src={logo} alt="" />
      </div>

      <div className={styles.navbarContents}>
        <ul>
          <li>
            <NavLink exact to="/" className={styles.navLink} activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navLink} activeClassName={styles.activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.navLink} activeClassName={styles.activeLink}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className={styles.navLink} activeClassName={styles.activeLink}>
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navLink} activeClassName={styles.activeLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.serviceContactBtn}>
        <button type="button" className={styles.callBtn}>
          Call
        </button>
        <button type="button" className={styles.emailBtn}>
          Email
        </button>
        <button type="button" className={styles.whatsAppBtn}>
          WhatsApp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactMainContainer}>
      <div className={styles.containerForContact}>
        <div className={styles.contactInfo}>
          <img className={styles.logoImage2} src="https://www.invayas.com/images/logo-white.png"/>
          <p>
            We diligently work towards securing a long-term partnership with
            each customer and we intend to do this by, Developing a productive
            work environment and fostering a performance-based culture.
          </p>
        </div>
     
        <div className={styles.contactDetails}>
        <h3>CONTACT</h3>
        <p>+91 9141176274</p>
        <p>support@invayas.com</p>
        </div>

        <div className={styles.contactToSocialMedia}>
          <h3>SOCIAL MEDIA</h3>
        </div>
      </div>

      <div></div>

      <footer><p>© 2021 Invayas All Rights Reserved.</p></footer>
    </section>
  );
};
export default Contact;

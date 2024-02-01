// Services.js

import React from "react";
import styles from './Services.module.css';

const Services = ({dataServices}) => {
  const {servicesHeading, serviceDescription} = dataServices;

  return (
    <div className={styles.serviceCard}>
      
        <h3 className={styles.servicesHeading}>{servicesHeading}</h3>
        <p className={styles.serviceDescription}>{serviceDescription}</p>
     
    </div>
  );
};

export default Services;

// ServicesList.js

import React from "react";
import Services from './Services';
import { servicesData } from "./servicesData";
import styles from './Services.module.css';

const ServicesList = () => {
  return (
    <div className={styles.serviceCardContainer}>
      {servicesData.map((dataServices, index) => {
        return (
          <div className={styles.serviceCard} key={index}>
            <Services dataServices={dataServices} />
          </div>
        );
      })}
    </div>
  );
};

export default ServicesList;

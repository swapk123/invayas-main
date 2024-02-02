import React from "react";
import styles from "./Clients.module.css";
import tagSkill from "../../assets/clientsImages/S1.png";
import agasinc from "../../assets/clientsImages/agasinc.png";
import airLogo from "../../assets/clientsImages/airlogo.png";
import aldecor from "../../assets/clientsImages/aldecor.png";
import asda from "../../assets/clientsImages/asda.png";
import cooloxy from "../../assets/clientsImages/cooloxylogo.png";
import cross from "../../assets/clientsImages/cross.png";
import erp from "../../assets/clientsImages/erp.png";
import aita from "../../assets/clientsImages/AITA.png";

const Clients = () => {
  return (
    <React.Fragment>
      <div className={styles.clientsContent}>
        <p className={styles.clientsContent1}>Who we work with</p>

        <h1 className={styles.clientsHeading1}>Client showcase</h1>
        <div className={styles.clients}>
          <div className={styles.flex}>
            <img src={tagSkill} className={styles.tagSkill} alt="" />
          </div>
          <div className={styles.flex}>
            {" "}
            <img src={agasinc} alt="" className={styles.tagSkill} />
          </div>
          <div className={styles.flex}>
            <img src={airLogo} alt="" className={styles.tagSkill} />
          </div>
          <div className={styles.flex}>
            <img src={asda} alt="" className={styles.tagSkill} />
          </div>
          <div className={styles.flex}>
            <img src={aldecor} alt="" className={styles.tagSkill} />{" "}
          </div>
          <div className={styles.flex}>
            <img src={cooloxy} className={styles.coolOxy} alt="" />
          </div>
          <div className={styles.flex}>
            <img src={cross} alt="" className={styles.tagSkill} />
          </div>
          <div className={styles.flex}>
            <img src={erp} alt="" className={styles.tagSkill} />{" "}
          </div>
          <div className={styles.flex}>
            <img src={aita} alt="" className={styles.tagSkill} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Clients;

import React from "react";
import styles from './Home.module.css';

const Home = () => {

const homeSectionContents={
  homeSectionImage:"https://www.invayas.com/images/ones.png",
  homeSectionHeading:"Complete Solution To All Kind Of Applications",
  homeSectionDescription:"We are Software Professionals to convert your Ideas to Great Product",
  homeSectionBtnContent:"Know More"
}
  return (
    <React.Fragment>
      <div className={styles.homeContainer}>
        <div>
          <img src={homeSectionContents.homeSectionImage} alt="" />
        </div>
        <div>
          <h1>{homeSectionContents.homeSectionHeading}</h1>
          <p className={styles.companyDetails}>{homeSectionContents.homeSectionDescription}</p>
          <button type="button" className={styles.KnowMoreBtn}>{homeSectionContents.homeSectionBtnContent}</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;

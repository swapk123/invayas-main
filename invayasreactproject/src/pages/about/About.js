import React from "react";
import styles from "./About.module.css";

const About = () => {
  const aboutData = [
    {
      aboutTitle: "AboutUs",
      titleData:
        "At Invayas we help the business to build an intelligently designed digital future.Tell us about your idea, and we’ll offer the most fitting technological solution.We are passionate about our customers and consumers and embrace their priorities as our own.We specialize in outsourcing software development projects and in delivering end-to-end development and testing services. Our services are specially designed and structured as per our client’s needs & cater to various sizes of businesses from startups to large-scale businesses.",
      images: "https://www.invayas.com/images/commerce.png",
    },
    {
      aboutTitle: "Our Vision and Values",
      titleData:
        "We deliver Software Solutions that contribute Sustainability to our Customers' success. Our honesty is our main strength, We are always honest & transparent with our clients and we want to carry the same in the future. Integrity, adeptness, diligence, hard work, agility & dedication are some of the qualities that we promote. Our purpose is to develop and promote advanced information technologies for multi-user operations. We are committed to improving the lives of our clients by providing quality services and solutions that earn their trust and build lifetime relationships.",
      images:
        "https://www.invayas.com/images/Web%20development%20_Isometric.png",
    },
  ];
  return (
    <React.Fragment>
      <div className={styles.aboutFirstContainer}>
        <div className={styles.aboutLeftSideDetails}>
          <h1>{aboutData[0].aboutTitle}</h1>
          <p>{aboutData[0].titleData}</p>
        </div>
        <div className={styles.aboutRightSideDetails}>
          <img
            className={styles.aboutFirstContainerImage}
            src={aboutData[0].images}
            alt=""
          />
        </div>
      </div>

      <div className={styles.aboutFirstContainer}>
        <div className={styles.aboutRightSideDetails}>
          <img
            className={styles.aboutFirstContainerImage}
            src={aboutData[1].images}
            alt=""
          />
        </div>
        <div className={styles.aboutLeftSideDetails}>
          <h1>{aboutData[1].aboutTitle}</h1>
          <p>{aboutData[1].titleData}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;

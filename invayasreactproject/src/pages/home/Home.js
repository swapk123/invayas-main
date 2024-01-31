import React from "react";

const Home = () => {

const homeSectionContents={
  homeSectionImage:"https://www.invayas.com/images/ones.png",
  homeSectionHeading:"Complete Solution To All Kind Of Applications",
  homeSectionDescription:"We are Software Professionals to convert your Ideas to Great Product",
  homeSectionBtnContent:"Know More"
}
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={homeSectionContents.homeSectionImage} alt="" />
        </div>
        <div>
          <h1>{homeSectionContents.homeSectionHeading}</h1>
          <p>{homeSectionContents.homeSectionDescription}</p>
          <button>{homeSectionContents.homeSectionBtnContent}</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;

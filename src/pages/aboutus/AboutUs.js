import React, { useState } from "react";
import "../home/Home.css";
import "./AboutUs.css";
import userIMG from "../../assets/img/user.png";
import yellowArrow from "../../assets/img/yellow_arrow.svg";
import translate from "../../i18n/messages/translate";

function AboutUs() {
  const [extendbio1, setExtendBio1] = useState(0);
  const [extendbio2, setExtendBio2] = useState(0);
  const [extendbio3, setExtendBio3] = useState(0);

  const setAnimation = (idVal) => {
    switch (idVal) {
      case 1:
        setExtendBio1(extendbio1 ? 0 : 1);
        break;
      case 2:
        setExtendBio2(extendbio2 ? 0 : 1);
        break;
      case 3:
        setExtendBio3(extendbio3 ? 0 : 1);
        break;
      default:
        setExtendBio1(0);
    }
  };
  return (
    <div className="home-container">
      <div className="bio-wrapper">
        <div className="bio-profile-wrapper">
          <div className="bio-img-wrapper">
            <img src={userIMG} className="bio-img" alt="userIMG" />
          </div>
          <div className="arrow-wrapper">
            <img
              src={yellowArrow}
              className="yellow-arrow"
              alt="arrow"
              onClick={() => setAnimation(1)}
            />
          </div>
          <div className="bio-description" extendbio={extendbio1} id="desc-1">
            <h1>
              {translate("bioName")}:<br />
              <p>{translate("name1")}</p>
            </h1>
            <h1>
              {translate("bioPosition")}:<br />
              <p>{translate("pos1")}</p>
            </h1>
  <h1>{translate("bioThoughts")}:<br /></h1>
            <p>{translate("thoughts1")}</p>
          </div>
        </div>

        <div className="bio-profile-wrapper">
          <div className="bio-img-wrapper">
            <img src={userIMG} className="bio-img" alt="userIMG" />
          </div>
          <div className="arrow-wrapper">
            <img
              src={yellowArrow}
              className="yellow-arrow"
              alt="arrow"
              onClick={() => setAnimation(2)}
            />
          </div>
          <div className="bio-description" extendbio={extendbio2} id="2">
            <h1>
              {translate("bioName")}:<br />
              <p>{translate("name2")}</p>
            </h1>
            <h1>
              {translate("bioPosition")}:<br />
              <p> {translate("pos2")}</p>
            </h1>
            <h1>{translate("bioThoughts")}:<br /></h1>
            <p> {translate("thoughts2")}</p>
          </div>
        </div>

        <div className="bio-profile-wrapper">
          <div className="bio-img-wrapper">
            <img src={userIMG} className="bio-img" alt="userIMG" />
          </div>
          <div className="arrow-wrapper">
            <img
              src={yellowArrow}
              className="yellow-arrow"
              alt="arrow"
              onClick={() => setAnimation(3)}
            />
          </div>
          <div className="bio-description" extendbio={extendbio3} id="3">
            <h1>
              {translate("bioName")}:<br />
               <p>{translate("name3")}</p>
            </h1>
            <h1>
              {translate("bioPosition")}:<br />
              <p> {translate("pos3")}</p>
            </h1>
            <h1>{translate("bioThoughts")}:<br /></h1>
            <p> {translate("thoughts3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;

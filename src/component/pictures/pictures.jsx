import React from "react";
import appleColor from "./appleColor.jpg";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import "./styles.css";
import macColor from "../mac/macColor.jpg";
import IpadAir from "./ipadair";
import IphoneSE from "./iphonese";
import IphoneAlt from "./iphonesealt";
import IphonePro from "./iphonepro";
import FooterText from "./../footer/footerText";

const MainPictures = () => {
  return (
    <React.Fragment>
      <div className="box">
        <div className="main-image">
          <img src={appleColor} alt="colorful apple" className="main-pic" />
        </div>

        <div className="main-text">
          <h1>
            Introducing the all-new Mac Studio and Studio Display, new iPad Air,
            new iPhone SE, and iPhone 13 and iPhone 13 Pro in two new shades of
            green.
          </h1>
        </div>
        <div>
          <button className="main-button">Watch the event</button>
        </div>
      </div>
      <div className="macBox">
        <div className="macContent">
          <img src={macColor} alt="mac" className="macImage" />
          <div className="mac-text">
            <div className="mac-text-div">
              <h2>Studio Display</h2>
              <p>
                Immersive 27-inch 5K Retina display. 12MP Ultra Wide camera with
                Center Stage. Six speakers and Spatial Audio.
              </p>
              <button className="white-button">Learn more</button>
              <button className="white-button">Order now</button>
            </div>
            <div className="mac-text-div">
              <h2>Mac Studio</h2>
              <p>
                Outrageous performance with the M1 Max or all-new M1 Ultra chip.
                Stunningly compact design. Extensive connectivity
              </p>

              <button className="white-button">Learn more</button>
              <button className="white-button">Order now</button>
            </div>
          </div>
        </div>
        <IpadAir />
        <IphoneSE />
        <IphoneAlt />
        <IphonePro />
      </div>
    </React.Fragment>
  );
};

export default MainPictures;

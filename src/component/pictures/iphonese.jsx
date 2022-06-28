import React from "react";
import "./styles.css";
import iphonese from "./iphonese.jpg";
import iphoneText from "./iphoneText.svg";

const IphoneSE = () => {
  return (
    <div className="macBox-secondary">
      <div className="macContent-white  white-hidden">
        <div className="mac-text-secondary">
          <div className="mac-text-div-white card-title card-text">
            <img src={iphoneText} alt="ipad" />
            <p>
              Superpowerful A15 Bionic chip. Superstar camera. Big-time battery
              life. All at an incredible price.
            </p>
            <button className="white-button">Learn more</button>
            <button className="white-button">Order now</button>
          </div>
        </div>
        <img src={iphonese} alt="mac" className="iphone-image" />
      </div>
    </div>
  );
};

export default IphoneSE;

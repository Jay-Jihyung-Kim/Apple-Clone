import React from "react";
import "./styles.css";
import iphonese1x from "./iphonese1x.jpg";
import iphoneText from "./iphoneText.svg";

const IphoneAlt = () => {
  return (
    <div className="macBox-secondary">
      <div className="macContent-white-alt">
        <img src={iphonese1x} alt="mac" className="iphone-image" />
        <div className="mac-text-secondary">
          <div className="mac-text-div-white card-title card-text card-alt">
            <img src={iphoneText} alt="ipad" />
            <p>
              Superpowerful A15 Bionic chip. Superstar camera. Big-time battery
              life. All at an incredible price.
            </p>
            <button className="white-button">Learn more</button>
            <button className="white-button">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneAlt;

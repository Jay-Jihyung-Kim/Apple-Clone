import React from "react";
import "./styles.css";
import iphonepro from "./iphonepro.jpg";
import iphoneText from "./iphoneText.svg";

const IphonePro = () => {
  return (
    <div className="macBox-secondary">
      <div className="macContent-white-swap">
        <img src={iphonepro} alt="iphone-pro" className="iphone-pro" />
        <div className="mac-text-secondary">
          <div className="mac-text-div card-title card-text no-margin">
            <h2>iPhone 13 Pro</h2>
            <p>
              A dramatically more powerful camera system. A display so
              responsive, every interaction feels new again.
            </p>
            <button className="white-button">Learn more</button>
            <button className="white-button">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphonePro;

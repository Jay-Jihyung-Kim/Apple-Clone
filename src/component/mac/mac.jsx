import React from "react";
import macColor from "./macColor.jpg";
import "./styles.css";

const MacImage = () => {
  return (
    <React.Fragment>
      <div className="mac-box">
        <img src={macColor} alt="colorful apple" className="main-pic" />
      </div>
    </React.Fragment>
  );
};

export default MacImage;

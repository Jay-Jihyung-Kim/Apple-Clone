import React from "react";
import "./styles.css";
import ipads from "./ipads.jpg";
import ipadair from "./ipadairTitle.png";

const IpadAir = () => {
  return (
    <div className="macBox-secondary">
      <div className="macContent-black">
        <img src={ipads} alt="mac" className="card-image" />
        <div className="mac-text-secondary">
          <div className="mac-text-div-secondary card-title card-text">
            <img src={ipadair} alt="ipad" />
            <p>
              Supercharged by the Apple M1 chip. 12MP Ultra Wide front camera
              with Center Stage. Blazing‑fast 5G.
            </p>
            <p>Five gorgeous colors.</p>
            <button className="black-button">Learn more</button>
            <button className="black-button">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadAir;

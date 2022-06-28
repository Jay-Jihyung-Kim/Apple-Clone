import React, { useState } from "react";
import "./styles.css";
import { BsPlus } from "react-icons/bs";

const FooterText = () => {
  const [open, setOpen] = useState("footer-column");
  const [open1, setOpen1] = useState("footer-column");
  const [open2, setOpen2] = useState("footer-column");
  const [open3, setOpen3] = useState("footer-column");
  const [open4, setOpen4] = useState("footer-column");
  const [open5, setOpen5] = useState("footer-column");
  const [open6, setOpen6] = useState("footer-column");
  const [open7, setOpen7] = useState("footer-column");
  const [open8, setOpen8] = useState("footer-column");
  const [open9, setOpen9] = useState("footer-column");

  function handleClick() {
    if (open === "footer-column") {
      setOpen("footer-column footer-list-collapsible");
    } else {
      setOpen("footer-column");
    }
  }
  function handleClick1() {
    if (open1 === "footer-column") {
      setOpen1("footer-column footer-list-collapsible");
    } else {
      setOpen1("footer-column");
    }
  }
  function handleClick2() {
    if (open2 === "footer-column") {
      setOpen2("footer-column footer-list-collapsible");
    } else {
      setOpen2("footer-column");
    }
  }
  function handleClick3() {
    if (open3 === "footer-column") {
      setOpen3("footer-column footer-list-collapsible");
    } else {
      setOpen3("footer-column");
    }
  }
  function handleClick4() {
    if (open4 === "footer-column") {
      setOpen4("footer-column footer-list-collapsible");
    } else {
      setOpen4("footer-column");
    }
  }
  function handleClick5() {
    if (open5 === "footer-column") {
      setOpen5("footer-column footer-list-collapsible");
    } else {
      setOpen5("footer-column");
    }
  }
  function handleClick6() {
    if (open6 === "footer-column") {
      setOpen6("footer-column footer-list-collapsible");
    } else {
      setOpen6("footer-column");
    }
  }
  function handleClick7() {
    if (open7 === "footer-column") {
      setOpen7("footer-column footer-list-collapsible");
    } else {
      setOpen7("footer-column");
    }
  }
  function handleClick8() {
    if (open8 === "footer-column") {
      setOpen8("footer-column footer-list-collapsible");
    } else {
      setOpen8("footer-column");
    }
  }
  function handleClick9() {
    if (open9 === "footer-column") {
      setOpen9("footer-column footer-list-collapsible");
    } else {
      setOpen9("footer-column");
    }
  }

  return (
    <div className="footer-box">
      <div className="footer-text">
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings &gt; General
          &gt; Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
        <p>
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
      </div>
      <div className="footer-collapsible">
        <div className="flex-divider">
          <div className={open} onClick={handleClick}>
            <h3>Shop and Learn</h3>
            <div className="footer-list">
              <p>Store</p>
              <p>Mac</p>
              <p>iPad</p>
              <p>iPhone</p>
              <p>Watch</p>
              <p>AirPods</p>
              <p>TV & Home</p>
              <p>iPod touch</p>
              <p>AirTag</p>
              <p>Accessories</p>
              <p>Gift Cards</p>
            </div>
          </div>
        </div>
        <div className="flex-divider">
          <div className={open1} onClick={handleClick1}>
            <h3>Services</h3>
            <div className="footer-list">
              <p>Apple Music</p>
              <p>Apple TV+</p>
              <p>Apple Fitness+</p>
              <p>Apple Arcade</p>
              <p>iCloud</p>
              <p>Apple One</p>
              <p>Apple Card</p>
              <p>Apple Books</p>
              <p>Apple Podcasts</p>
              <p>App Store</p>
            </div>
          </div>
          <div className={open2} onClick={handleClick2}>
            <h3>Account</h3>
            <div className="footer-list">
              <p>Manage Your Apple ID</p>
              <p>Apple Store Account</p>
              <p>iCloud.com</p>
            </div>
          </div>
        </div>
        <div className="flex-divider">
          <div className={open3} onClick={handleClick3}>
            <h3>Apple Store</h3>
            <div className="footer-list">
              <p>Find a Store</p>
              <p>Genius Bar</p>
              <p>Today at Apple</p>
              <p>Apple Camp</p>
              <p>Apple Store App</p>
              <p>Refurbished and Clearance</p>
              <p>Financing</p>
              <p>Apple Trade In</p>
              <p>Order Status</p>
              <p>Shopping Help</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-divider">
            <div className={open4} onClick={handleClick4}>
              <h3>For Business</h3>
              <div className="footer-list">
                <p>Apple and Business</p>
                <p>Shop for Business</p>
              </div>
            </div>
            <div className={open5} onClick={handleClick5}>
              <h3>For Education</h3>
              <div className="footer-list">
                <p>Apple and Education</p>
                <p>Shop for K-12</p>
                <p>Shop for College</p>
              </div>
            </div>
            <div className={open6} onClick={handleClick6}>
              <h3>For Healthcare</h3>
              <div className="footer-list">
                <p>Apple in Healthcare</p>
                <p>Health on Apple Watch</p>
                <p>Health Records on Iphone</p>
              </div>
            </div>
            <div className={open7} onClick={handleClick7}>
              <h3>For Government</h3>
              <div className="footer-list">
                <p>Shop for Government</p>
                <p>Shop for Veterans and Military</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-divider">
          <div className={open8} onClick={handleClick8}>
            <h3>Apple Values</h3>
            <div className="footer-list">
              <p>Accessibility</p>
              <p>Education</p>
              <p>Environment</p>
              <p>Inclusion and Diversity</p>
              <p>Privacy</p>
              <p>Racial Equity and Justice</p>
              <p>Supplier Responsibility</p>
            </div>
          </div>
          <div className={open9} onClick={handleClick9}>
            <h3>About Apple</h3>
            <div className="footer-list">
              <p>Newsroom</p>
              <p>Apple Leadership</p>
              <p>Career Opportunities</p>
              <p>Investors</p>
              <p>Ethics & Compliance</p>
              <p>Events</p>
              <p>Contact Apple</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text less-margin">
        <div>
          <p>
            More ways to shop: <a href="">Find an Apple Store</a> or{" "}
            <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
        </div>
      </div>
      <div className="footer-text no-margin grid-column">
        <div className="footer-country">
          <a>United States</a>
        </div>
        <div className="flex-column">
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
          <a>Sales and Refunds</a>
          <a>Legal</a>
          <a>Site Map</a>
        </div>
        <div>
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterText;

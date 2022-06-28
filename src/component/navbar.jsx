import React, { useState } from "react";
import "./styles.css";
import { FaApple, FaSearch, FaShoppingBag, FaDoorClosed } from "react-icons/fa";
import { BsArrowUpRight, BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { LoadIcon } from "./unicef";

const NavBar = () => {
  const [open, setOpen] = useState("nav collapsible");
  const [search, setSearch] = useState("nav-content");
  const [bar, setBar] = useState("search-bar search-collapse");
  const [quick, setQuick] = useState("quick-link-collapsible");

  function handleClick() {
    if (open === "nav collapsible") {
      setOpen("nav collapsible--expanded");
    } else {
      return setOpen("nav collapsible");
    }
  }

  function searchClick() {
    if (search === "nav-content") {
      setSearch("nav-content nav-hide");
      setBar("search-bar search-collapsible-expanded");
      setQuick("quick-link-collapsible quick-link-expanded");
    }
  }

  function cancelClick() {
    if (bar === "search-bar search-collapsible-expanded") {
      setSearch("nav-content");
      setBar("search-bar search-collapse");
      setQuick("quick-link-collapsible");
    }
  }

  return (
    <React.Fragment>
      <nav className={open}>
        <div className="nav-drop">
          <button onClick={handleClick}>
            <BsList className="nav-icon nav-dropdown" />
          </button>
          <a href="">
            <FaApple className="nav-icon nav-dropdown" />
          </a>
          <a href="">
            <FaShoppingBag className="nav-icon nav-dropdown" />
          </a>
        </div>

        <div className={search}>
          <button>
            <FaApple className="nav-icon" />
          </button>
          <form action="search">
            <button type="submit" className="nav-search">
              <FaSearch />
            </button>
            <input type="text" placeholder="Search apple.com" />
          </form>
          <a className="nav-brand">Store</a>
          <a className="nav-brand">Mac</a>
          <a className="nav-brand">Ipad</a>
          <a className="nav-brand">Iphone</a>
          <a className="nav-brand">Watch</a>
          <a className="nav-brand">AirPods</a>
          <a className="nav-brand">TV & Home</a>
          <a className="nav-brand">Only on Apple</a>
          <a className="nav-brand">Accessories</a>
          <a className="nav-brand">Support</a>
          <button onClick={searchClick}>
            <FaSearch className="nav-icon" />
          </button>
          <button>
            <FaShoppingBag className="nav-icon" />
          </button>
        </div>

        <div className={bar}>
          <form action="search" className="hidden-search">
            <button type="submit" className="hidden-nav-search">
              <FaSearch />
            </button>
            <input
              className="hidden-input"
              type="text"
              placeholder="Search apple.com"
            />
            <div className="cancel">
              <AiOutlineClose
                className="hidden-nav-search"
                onClick={cancelClick}
              />
            </div>
          </form>
        </div>
      </nav>

      <div className={quick}>
        <div className="search-quick-link">
          <div className="quick-link-content">
            <h3> QUICK LINKS </h3>
            <a href="">Visiting an Apple Store FAQ</a>
            <a href="">AirPods</a>
            <a href="">AirTag</a>
            <a href="">AppleCare+</a>
            <a href="">Gift Cards</a>
          </div>
        </div>
      </div>

      <nav className="nav-secondary">
        <LoadIcon />
        <a className="nav-brand-secondary">
          Donate to support families affected by the crisis in Ukraine
          <BsArrowUpRight className="nav-icon-secondary" />
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

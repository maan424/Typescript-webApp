import React from "react";
import "./Header_search.css";

const search = () => {
    return (
        <div className="main-menu">
        <div className="flex-container">
          <div className="menu-links">
            <a className="dot" href="#">
              <i className="fa-sharp fa-regular fa-magnifying-glass" />
            </a>
            <a className="dot" href="#">
              <i className="fa-regular fa-retweet" />
            </a>
            <a className="dot" href="#">
              <i className="fa-regular fa-heart " />{" "}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1<span className="visually-hidden">unread messages</span>
              </span>
            </a>
            <a className="dot" href="#">
              <i className="fa-light fa-bag-shopping" />{" "}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5<span className="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default search;
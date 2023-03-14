import React from "react";
import "./Footer.css";

const footer = () => {
    return (
        <footer>
        <div className="foot">
          <hr style={{ width: "100%" }} />
          <div>
            <ul className="socials">
              <a className="socials-a" href="#">
                <i className="fa fa-facebook fa-xl" />
              </a>
              <a className="socials-a" href="#">
                <i className="fa fa-twitter fa-xl" />
              </a>
              <a className="socials-a" href="#">
                <i className="fa fa-google-plus fa-xl" />
              </a>
              <a className="socials-a" href="#">
                <i className="fa fa-youtube fa-xl" />
              </a>
              <a className="socials-a" href="#">
                <i className="fa fa-linkedin fa-xl" />
              </a>
            </ul>
          </div>
          <div>
            <p>
              © 2022 Fixxo. All Rights Reserved.
              <br />
            </p>
          </div>
        </div>
      </footer>        
    );
  }
  
  export default footer;
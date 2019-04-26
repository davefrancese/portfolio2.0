import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Contact from "./Contact";

const Landing = () => {
  return (
    <div className="App">
      <Helmet>
        <style type="text/css">
          {
            "body {background: linear-gradient(to right, #F2EFE7 50%, #222 50%);}"
          }
        </style>
      </Helmet>
      <Contact />
      <div className="Landing">
        <h1>
          dave francese <span>/ / / </span>
          <span className="red-slash"> / / /</span>
        </h1>
        <div className="choose-btn">
          <Link to="/webdevelopment">
            <button className="btn-wd">Web Development</button>
          </Link>
          <Link to="/graphicdesign">
            <button className="btn-gd">Graphic Design</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

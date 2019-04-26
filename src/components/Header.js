import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

const Header = ({ projects }) => {
  if (projects.length > 0) {
    return (
      <div className="Header">
        <div
          className={`${
            projects[0].type === "Web Development"
              ? "Header-container-light"
              : "Header-container-dark"
          }`}
        >
          <h1>
            <Link className="header-link" to="/">
              dave francese<span> / / / / /</span>
            </Link>
          </h1>
          <h2>
            <span>/ / / </span>
            {projects[0].type}
          </h2>
          <div>
            {projects[0].type === "Web Development" ? (
              <Link to="/graphicdesign" className="switch-link">
                <button>Switch to Graphic Design</button>
              </Link>
            ) : (
              <Link to="/webdevelopment" className="switch-link">
                <button>Switch to Web Development</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Header">
        <div
          className={`${
            projects.type === "Web Development"
              ? "Header-container-light"
              : "Header-container-dark"
          }`}
        >
          <h1>
            <Link className="header-link" to="/">
              dave francese<span> / / / / /</span>
            </Link>
          </h1>
          <h2>
            <span>/ / / </span>
            {projects.type}
          </h2>
          <div>
            {projects.type === "Web Development" ? (
              <Link to="/graphicdesign" className="switch-link">
                <button>Switch to Graphic Design</button>
              </Link>
            ) : (
              <Link to="/webdevelopment" className="switch-link">
                <button>Switch to Web Development</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Header;

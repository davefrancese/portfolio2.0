import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  shortenDescription = description => {
    description = description.split("");
    if (description.length > 250) {
      description = description
        .filter((phrase, i) => {
          return i <= 250;
        })
        .join("");
      return description + "...";
    } else {
      return description.join("");
    }
  };

  render() {
    const { project } = this.props;

    return (
      <div
        className={`${
          project.type === "Web Development" ? "Card-wd" : "Card-gd"
        }`}
      >
        <div className="card-image-container">
          <img
            className="card-poster"
            src={project.posterURL}
            alt={project.title}
          />
        </div>

        <div className="card-copy">
          <h2>{project.title}</h2>
          <p>
            {project.description
              ? this.shortenDescription(project.description)
              : null}
          </p>
          <div>
            <p>
              <Link className="more-link" to={`${project.id}`}>{`More>>`}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

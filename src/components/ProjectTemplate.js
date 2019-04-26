import React from "react";
import Helmet from "react-helmet";

import Header from "./Header";
import Contact from "./Contact";
import "../styles/ProjectTemplate.scss";

const ProjectTemplate = props => {
  const id = props.location.pathname
    .split("")
    .splice(1)
    .join("");
  const project = props.projects[id];
  let pdf;
  if (project.designImages) {
    pdf = project.designImages.filter(
      url => url === "../images/MercuryRetrogradeBook.pdf"
    );
  }
  const renderWebDevContent = project => {
    return (
      <div className="web-dev-proj">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.writeUp}</p>
        <div className="project-images">
          {project.screenShots.map(url => {
            return (
              <img className="web-dev-ss" src={url} alt="Project Screenshot" />
            );
          })}
        </div>
        <div className="project-walkthrough">
          <iframe
            title={project.title}
            className="walkthrough"
            src={`${project.embedVideo}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <div className="tech-images">
          {project.techImages.map(url => {
            return <img className="tech" src={url} alt="technology" />;
          })}
        </div>
        <div className="project-links">
          <a href={project.github} target="blank">
            <h2>GitHub</h2>
          </a>
          <a href={project.link} target="blank">
            <h2>Visit</h2>
          </a>
        </div>
      </div>
    );
  };

  const renderGraphicsContent = project => {
    return (
      <div className="graphics-proj">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.writeUp}</p>
        <div className="project-images">
          {project.designImages
            .filter(url => url !== "../images/MercuryRetrogradeBook.pdf")
            .map(url => {
              return (
                <img
                  className="graphics-images"
                  src={url}
                  alt="Project Screenshot"
                />
              );
            })}
        </div>
        {pdf.length > 0 ? (
          <div className="pdf">
            <a href={pdf[0]} alt="pdf" target="blank">
              Flip through the Mercury Retrograde Book!
            </a>
          </div>
        ) : null}
        <div className="tech-images">
          {project.techImages.map(url => {
            return <img className="tech" src={url} alt="technology" />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${
        project.type === "Web Development" ? "Template-light" : "Template-dark"
      }`}
    >
      <Helmet>
        {project.type === "Web Development" ? (
          <style>{"body {background-color: #F2EFE7;}"}</style>
        ) : (
          <style>{"body {background-color: #222;}"}</style>
        )}
      </Helmet>
      <Header projects={project} />
      <div className="template-container">
        <button className="back-btn" onClick={() => props.history.goBack()}>
          {"<<"}
        </button>
        {project.type === "Web Development"
          ? renderWebDevContent(project)
          : renderGraphicsContent(project)}
      </div>
      <Contact />
    </div>
  );
};

export default ProjectTemplate;

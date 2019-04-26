import React, { Component } from "react";
import Helmet from "react-helmet";

import { Projects } from "../PROJECTS";
import Header from "./Header";
import Card from "./Card";
import Contact from "./Contact";
import "../styles/Graphics.scss";

class Graphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const graphics = Projects.filter(
      project => project.type === "Graphic Design"
    );
    this.setState({ projects: graphics });
  }

  renderList(array) {
    return array.map(project => {
      return <Card key={project.title} project={project} />;
    });
  }

  render() {
    return (
      <div className="Graphics">
        <Helmet>
          <style>{"body {background: #222;}"}</style>
        </Helmet>
        <Header projects={this.state.projects} />
        <div className="card-list">{this.renderList(this.state.projects)}</div>
        <Contact />
      </div>
    );
  }
}

export default Graphics;

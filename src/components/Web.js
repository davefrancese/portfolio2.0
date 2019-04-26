import React, { Component } from "react";
import Helmet from "react-helmet";

import { Projects } from "../PROJECTS";
import Header from "./Header";
import Card from "./Card";
import Contact from "./Contact";
import "../styles/Web.scss";
import "../App.scss";

class Web extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const web = Projects.filter(project => project.type === "Web Development");
    this.setState({ projects: web });
  }

  renderList(array) {
    return array.map(project => {
      return <Card key={project.title} project={project} />;
    });
  }

  render() {
    return (
      <div className="Web">
        <Helmet>
          <style>{"body {background-color: #F2EFE7;}"}</style>
        </Helmet>
        <Header projects={this.state.projects} />
        <div className="Web-container">
          <div className="card-list">
            {this.renderList(this.state.projects)}
          </div>
        </div>
        <Contact />
      </div>
    );
  }
}

export default Web;

import React from "react";
import "./components.css";

const Project = (imageSRC, name, description, appLink, repo) => {

    return (
      <card className="project-card">
        <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imageSRC} alt="project-thumbnail"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={appLink} class="card-link">Deployed App</a>
                <a href={repo} class="card-link">Github Repository</a>
              </div>
            </div>
          </div>
        </div>
      </card>
    )
}

export default Project;
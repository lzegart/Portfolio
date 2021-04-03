import React from "react";
import "./components.css";

function Project({imageSRC, name, description, appLink, repo}) {

    return (
      <card className="project-card">
        <div className="card mb-3" style={{maxWidth: "800px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imageSRC} style={{width: "320px", height: "230px"}} alt="project-thumbnail"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={appLink} className="card-link">Deployed App</a>
                <a href={repo} className="card-link">Github Repository</a>
              </div>
            </div>
          </div>
        </div>
      </card>
    )
}

export default Project;
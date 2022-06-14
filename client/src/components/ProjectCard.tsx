import React from "react";
import { FaTrash } from "react-icons/fa";

const ProjectCard: React.FC<ProjectRowProps> = ({ project, idx }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="project-card">{project.name}</h5>
            <a className="btn btn-light" href={`/project/${project.id}`}>View</a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

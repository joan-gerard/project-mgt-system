import React, { useEffect, useState } from "react";

const ProjectCard: React.FC<ProjectRowProps> = ({ project }) => {
  // const [isStarted, setIsStarted] = useState(false);
  // const [isInProgress, setIsInProgress] = useState(false);
  // const [isCompleted, setIsCompleted] = useState(false);

  // useEffect(() => {
  //   if (project.status === "Not Started") {
  //     setIsStarted(true);
  //   }
  //   if (project.status === "In Progress") {
  //     setIsInProgress(true);
  //   }
  //   if (project.status === "Completed") {
  //     setIsCompleted(true);
  //   }
  // }, []);


  return (
    <div className="col-md-6">
      <div className="card mb-3">
        {/* <div className={`card-body text-white ${isStarted ? "bg-secondary" : ""} ${isInProgress ? "bg-warning" : ""} ${isCompleted ? "bg-success" : ""}`}> */}
        <div className={`card-body`}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="project-card">{project.name}</h5>
            <a className="btn btn-light" href={`/project/${project.id}`}>
              View
            </a>
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

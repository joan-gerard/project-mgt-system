import React, { useCallback, useEffect, useState } from "react";
import { calculateCountdown } from "../utils";
import NavDropdownButton from "./NavDropdownButton";

const ProjectCard: React.FC<ProjectRowProps> = ({ project }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [countdown, setCountdown] = useState<number | undefined>();

  useEffect(() => {
    if (project.status === "Not Started") {
      setIsStarted(true);
    }
    if (project.status === "In Progress") {
      setIsInProgress(true);
    }
    if (project.status === "Completed") {
      setIsCompleted(true);
    }
  }, []);

  useEffect(() => {
    calculateCountdown(project.completionDate, setCountdown);
  }, []);

  const countdownText = useCallback(
    () =>
      countdown && countdown < 0
        ? Math.abs(countdown) === 1
          ? `${countdown} day overdue`
          : `${countdown} days overdue`
        : countdown === 1
        ? `${countdown} day remaining`
        : `${countdown} days remaining`,
    [countdown]
  );

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className={`card-body`}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="project-card">{project.name}</h5>
            {/* <a className="btn btn-light" href={`/project/${project.id}`}>
              View
            </a>
            <a
              className="btn btn-light"
              href={`/project/schedule/${project.id}`}
            >
              Schedule
            </a> */}
            {/* <NavDropdownButton id={project.id} /> */}
            <div className="btn btn-light border shadow-sm shadow-hover">
              <a href={`/project/${project.id}`}>See Project</a>
            </div>
          </div>
          <p className="small">
            Status:{" "}
            <strong
              className={`rounded p-1 ${
                isStarted ? "bg-secondary text-white" : ""
              } ${isInProgress ? "bg-warning" : ""} ${
                isCompleted ? "bg-success text-white" : ""
              }`}
            >
              {project.status}
            </strong>
          </p>
          {isCompleted ? null : <p>{countdownText()}</p>}
          {/* {isCompleted ? null : countdown && countdown < 0 ? (
            <p>{countdown} days overdue</p>
          ) : (
            <p>{countdown} days remaining</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

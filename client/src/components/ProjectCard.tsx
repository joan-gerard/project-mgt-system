import React, { useEffect, useState } from "react";
import { getTodayDate } from "../utils";

const ProjectCard: React.FC<ProjectRowProps> = ({ project }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [countdown, setCountdown] = useState("test");

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

  const changeDateFormat = (completionDate: string) => {
    const replace = completionDate.replace(/-/g, " / ");
    const split = replace.split(" ");
    const reverse = split.reverse();

    const tmp = reverse[2];
    reverse[2] = reverse[0];
    reverse[0] = tmp;

    const join = reverse.join("");

    console.log("changeDateFormat", join);
    return join;
  };

  const calculateCountdown = (completionDate: string) => {
    const today = new Date();
    const date2 = new Date(changeDateFormat(completionDate));

    const Difference_In_Time = date2.getTime() - today.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // console.log(Math.ceil(Difference_In_Days));
    return Math.ceil(Difference_In_Days);
  };

  changeDateFormat(project.completionDate);

  console.log("project", project);

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className={`card-body`}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="project-card">{project.name}</h5>
            <a className="btn btn-light" href={`/project/${project.id}`}>
              View
            </a>
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
          <p>{calculateCountdown(project.completionDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

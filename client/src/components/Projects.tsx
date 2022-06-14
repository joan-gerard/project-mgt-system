import React from "react";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  console.log(data);

  return (
    <>
      {data.projects.length ? (
        <div className="row mt-5">
          {data.projects.map((project: IProject, idx: number) => (
            <ProjectCard key={idx} idx={idx} project={project} />
          ))}
        </div>
      ) : (<p>No Projects</p>)}
    </>
  );
};

export default Projects;

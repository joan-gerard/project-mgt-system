import { useEffect } from "react";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const Projects = () => {
  const { loading, error, data, client, called } = useQuery(GET_PROJECTS);

  console.log('useQuery called?', called)

  useEffect(() => {
    socket.on("receive_projects", (dataIO) => {
      // console.log("receive_projects - dataIO: ", dataIO.name);
      // const projectExist = data?.projects.find((project: IProject) => {
      //   return project.name === dataIO.name;
      // });
      // console.log("projectExist: ", projectExist);
      // if (!projectExist) {
        console.log('refetching...')

        client.refetchQueries({
          include: [GET_PROJECTS],
        });
      // }
      // refetchQueries: [{query: GET_CLIENTS}] // not recommended to avoid too many queries
    });
  }, [socket]);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  console.log("data.projects: ", data.projects);
  // const ioSendProjects = () => {
  //   socket.emit("send_projects", {
  //     data
  //   })
  // }
  return (
    <>
      {data.projects.length ? (
        <div className="row mt-3">
          {data.projects.map((project: IProject, idx: number) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      ) : (
        <h4 className="m-4">No Projects</h4>
      )}
    </>
  );
};

export default Projects;

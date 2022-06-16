import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectmutations";
import { GET_PROJECTS } from "../queries/projectQueries";

const ProjectCard: React.FC<ProjectRowProps> = ({ project, idx }) => {
  // const [deleteProject] = useMutation(DELETE_PROJECT, {
  //   variables: { id: project.id },
  //   update(cache, { data: { deleteProject } }) {
  //     const { projects } = cache.readQuery({ query: GET_PROJECTS }) || {};
  //     cache.writeQuery({
  //       query: GET_PROJECTS,
  //       data: {
  //         projects: projects?.filter(
  //           (project: IClient) => project.id !== deleteProject.id
  //         ),
  //       },
  //     });
  //   },
  // });

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="project-card">{project.name}</h5>
            {/* <div className="d-flex flex-column"> */}
              <a className="btn btn-light" href={`/project/${project.id}`}>
                View
              </a>
              {/* <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteProject()}
              >
                <FaTrash />
              </button> */}
            {/* </div> */}
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

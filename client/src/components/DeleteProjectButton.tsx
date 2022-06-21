import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectmutations";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ConfirmDialog from "./ConfirmDialog";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");


const DeleteProjectButton: React.FC<DeleteProjectButtonProps> = ({
  projectId,
}) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    update(cache, { data: { deleteProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS }) || {};
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects?.filter(
            (project: IClient) => project.id !== deleteProject.id
          ),
        },
      });
    },
  });

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDeleteProject = () => {
    deleteProject()
    socket.emit("delete_project", {
      data: { projectId }
    });

  }

  return (
    <>
      <div className="d-flex mt-5 ms-auto">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setConfirmOpen(true)}
        >
          <FaTrash className="icon mb-1" />
          Delete Project
        </button>
        <ConfirmDialog
          title="Delete Post?"
          open={confirmOpen}
          setOpen={setConfirmOpen}
          onConfirm={handleDeleteProject}
        >
          Are you sure you want to delete this post?
        </ConfirmDialog>
      </div>
    </>
  );
};

export default DeleteProjectButton;

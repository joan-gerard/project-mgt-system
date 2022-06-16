import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteProjectButton: React.FC<DeleteProjectButtonProps> = ({
  projectId,
}) => {
  return (
    <>
      <button className="btn btn-danger btn-sm ms-auto mt-5" onClick={() => {}}>
        <FaTrash />
      </button>
    </>
  );
};

export default DeleteProjectButton;

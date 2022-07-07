import * as React from "react";
import { FaPencilAlt } from "react-icons/fa";
import DeleteProjectButton from "./DeleteProjectButton";

const ProjectActions: React.FC<ProjectActionDropdownProps> = ({
  projectId,
  setNeedsUpdate,
}) => {
  return (
    <div className="d-flex align-items-center mx-2">
      {/* <div
        className="btn btn-primary py-1 px-2"
        onClick={() => setNeedsUpdate(true)}
      >
        <FaPencilAlt />
      </div> */}
      <DeleteProjectButton projectId={projectId} />
    </div>
  );
};

export default ProjectActions;

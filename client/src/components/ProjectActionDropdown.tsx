import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaEllipsisH, FaPencilAlt, FaWindowClose } from "react-icons/fa";
import DeleteProjectButton from "./DeleteProjectButton";
import edit1 from './assets/edit1.svg'
import edit2 from './assets/edit2.svg'
import edit3 from './assets/edit3.svg'
import edit4 from './assets/edit4.svg'
import edit5 from './assets/edit5.svg'
import edit6 from './assets/edit6.svg'
import edit7 from './assets/edit7.svg'

const ProjectActionDropdown: React.FC<ProjectActionDropdownProps> = ({
  projectId,
  setNeedsUpdate,
}) => {
  return (
    <div className="d-flex align-items-center">
      <div className="btn btn-white py-1 px-2"
        // type="button"
        // data-bs-toggle="modal"
        // data-bs-target="#addClientModal"
        onClick={() => setNeedsUpdate(true)}
      >
        <div className="d-flex align-items-center">
            <img src={edit5} />
        </div>
      </div>
      <DeleteProjectButton projectId={projectId} />
    </div>
  );
};

export default ProjectActionDropdown;

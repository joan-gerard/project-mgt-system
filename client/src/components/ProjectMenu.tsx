import React from "react";
import {
  FaClipboardList,
  FaEdit,
  FaInfo,
  FaRegCalendarAlt,
} from "react-icons/fa";

const ProjectMenu: React.FC<ProjectMenuProps> = ({ setNav }) => {
  return (
    // <div className="btn-group btn-group-toggle" data-toggle="buttons">
    //   <label className=" btn-warning active">
    //     <button type="button" className="btn bg-warning" onClick={() => setNav("info")}>
    //       Info
    //     </button>
    //   </label>
    //   <label className=" btn-warning">
    //     <button type="button" className="btn bg-warning" onClick={() => setNav("wbs")}>
    //       WBS
    //     </button>
    //   </label>
    //   <label className=" btn-warning">
    //     <button
    //       type="button"
    //       className="btn bg-warning"
    //       onClick={() => setNav("schedule")}
    //     >
    //       Schedule
    //     </button>
    //   </label>
    // </div>

    <div className="d-flex mx-2 my-2">
      <button
        type="button"
        className="btn-nostyle me-3 d-flex align-items-center p-1"
        onClick={() => setNav("info")}
      >
        <FaInfo />
        <div>Info</div>
      </button>

      <button
        type="button"
        className="btn-nostyle me-3 d-flex align-items-center p-1"
        onClick={() => setNav("wbs")}
      >
        <FaClipboardList />
        <div>WBS</div>
      </button>

      <button
        type="button"
        className="btn-nostyle me-3 d-flex align-items-center p-1"
        onClick={() => setNav("schedule")}
      >
        <FaRegCalendarAlt className="align-content-center" />
        <div>Schedule</div>
      </button>

      <button
        type="button"
        className="btn-nostyle me-3 d-flex align-items-center p-1"
        onClick={() => setNav("edit")}
      >
        <FaEdit className="align-content-center" />
        <div>Edit</div>
      </button>
    </div>
  );
};

export default ProjectMenu;

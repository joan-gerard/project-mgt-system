import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

import * as io from "socket.io-client";
import { ADD_TASK } from "../mutations/taskMutations";
import { GET_TASKS } from "../queries/taskQueries";

const socket = io.connect("http://localhost:5000");

const AddTaskScheduleModal: React.FC<AddTaskFormProps> = ({ id }) => {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [progress, setProgress] = useState("");
  const [dependencies, setDependencies] = useState("");

  const [addTask] = useMutation(ADD_TASK, {
    variables: {
      projectId: id,
      name,
      start,
      end,
      progress: +progress,
      dependencies,
    },
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleAddProjectTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();

    setName("");
    setStart("");
    setEnd("");
    setProgress("");
    setDependencies("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary btn-effect task-icon"
        data-bs-toggle="modal"
        data-bs-target="#addTaskModal"
      >
        <div className="d-flex align-items-center">
          <div>Add Task</div>
        </div>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addTaskModal"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskModalLabel">
                Client Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddProjectTask}>
                <div className="mb-3">
                  <label className="form-label">Task</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Start</label>
                  <input
                    type="date"
                    className="form-control"
                    id="start"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">End</label>
                  <input
                    type="date"
                    className="form-control"
                    id="end"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Progress</label>
                  <input
                    type="text"
                    className="form-control"
                    id="progress"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Dependencies</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dependencies"
                    value={dependencies}
                    onChange={(e) => setDependencies(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskScheduleModal;

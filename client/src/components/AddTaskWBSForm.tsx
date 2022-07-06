import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ADD_TASK } from "../mutations/taskMutations";
import { GET_TASKS } from "../queries/taskQueries";

const AddTaskWBSForm: React.FC<AddTaskFormProps> = ({ id }) => {
  const [newTask, setNewTask] = useState<any>();

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
    <form
      onSubmit={handleAddProjectTask}
      className="flex-table"
      role="rowgroup"
    >
      <div className="flex-row first" role="cell"></div>
      <div className="flex-row" role="cell">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="text"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="text"
          value={dependencies}
          onChange={(e) => setDependencies(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <button type="submit" className="btn btn-success btn-sm">
          <FaPlusSquare />
        </button>
      </div>
    </form>
  );
};

export default AddTaskWBSForm;

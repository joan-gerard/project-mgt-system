import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const AddTaskForm = () => {
  const [newTask, setNewTask] = useState<any>();

  const [taskName, setTaskName] = useState("");
  const [taskStart, setTaskStart] = useState("");
  const [taskEnd, setTaskEnd] = useState("");
  const [taskProgress, setTaskProgress] = useState("");
  const [taskDependencies, setTaskDependencies] = useState("");

  const handleAddProjectTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: taskName,
      name: taskName,
      start: taskStart,
      end: taskEnd,
      progress: +taskProgress,
      dependencies: taskDependencies,
    };

    console.log(newTask);
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
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="date"
          value={taskStart}
          onChange={(e) => setTaskStart(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="date"
          value={taskEnd}
          onChange={(e) => setTaskEnd(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="text"
          value={taskProgress}
          onChange={(e) => setTaskProgress(e.target.value)}
        />
      </div>
      <div className="flex-row" role="cell">
        <input
          type="text"
          value={taskDependencies}
          onChange={(e) => setTaskDependencies(e.target.value)}
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

export default AddTaskForm;

import React, { useState } from "react";

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
    <>
      <th scope="row"></th>
      <td>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={taskStart}
          onChange={(e) => setTaskStart(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={taskEnd}
          onChange={(e) => setTaskEnd(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={taskProgress}
          onChange={(e) => setTaskProgress(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={taskDependencies}
          onChange={(e) => setTaskDependencies(e.target.value)}
        />
      </td>
      <td>
        <button type="submit">Form</button>
      </td>
    </>
  );
};

export default AddTaskForm;

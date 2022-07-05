import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_TASKS } from "../queries/taskQueries";
import { sortProjectTasks } from "../utils";

const WBS: React.FC<WBSProps> = ({ id, loading, error }) => {
  const [tasks, setTasks] = useState<any>([]);

  const {
    loading: taskLoading,
    error: taskError,
    data: taskData,
  } = useQuery(GET_TASKS);

  useEffect(() => {
    if (!loading && !error && !taskLoading && !taskError) {
      const projectTasks = taskData.tasks.filter(
        (task: any) => task.projectId === id
      );
      console.log("projectTasks", projectTasks);

      projectTasks.sort(sortProjectTasks);

      setTasks(projectTasks);
    }
  }, [loading, error, taskLoading, taskError, taskData]);
  return (
    <>
      <h5 className="mt-5">Work Breakdown Structure</h5>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">WBS</th>
            <th scope="col">Task</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Progress</th>
            <th scope="col">Dependency</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: ITask, i: number) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{task.name}</td>
              <td>{task.start}</td>
              <td>{task.end}</td>
              <td>{task.progress}</td>
              <td>{task.dependencies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WBS;
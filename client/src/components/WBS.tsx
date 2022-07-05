import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_TASKS } from "../queries/taskQueries";
import { sortProjectTasks } from "../utils";
import AddTaskForm from "./AddTaskForm";
import "./WBS.scss";

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

      projectTasks.sort(sortProjectTasks);

      setTasks(projectTasks);
    }
  }, [loading, error, taskLoading, taskError, taskData]);

  return (
    <>
      <h5 className="mt-5">Work Breakdown Structure</h5>
      <div className="table-container" role="table">
        <div className="flex-table header" role="rowgroup">
          <div className="flex-row first" role="columnheader">
            WBS
          </div>
          <div className="flex-row" role="columnheader">
            Task
          </div>
          <div className="flex-row" role="columnheader">
            Start
          </div>
          <div className="flex-row" role="columnheader">
            End
          </div>
          <div className="flex-row" role="columnheader">
            Progress
          </div>
          <div className="flex-row" role="columnheader">
            Dependencies
          </div>
        </div>
        {tasks.map((task: ITask, i: number) => (
          <div key={i} className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              {i + 1}
            </div>
            <div className="flex-row" role="cell">
              {task.name}
            </div>
            <div className="flex-row" role="cell">
              {task.start}
            </div>
            <div className="flex-row" role="cell">
              {task.end}
            </div>
            <div className="flex-row" role="cell">
              {task.progress}
            </div>
            <div className="flex-row" role="cell">
              {task.dependencies}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WBS;

import { useState, useEffect } from "react";
import { FrappeGantt } from "frappe-gantt-react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import { sampleTasks } from "../sampleTasks";
import { GET_TASKS } from "../queries/taskQueries";
import { sortProjectTasks } from "../utils";
import AddTaskForm from "../components/AddTaskWBSForm";
import AddTaskModal from "../components/AddTaskScheduleModal";
import AddTaskScheduleModal from "../components/AddTaskScheduleModal";

const Schedule = () => {
  const [tasks, setTasks] = useState<any>(sampleTasks);
  // const [tasks, setTasks] = useState<any>([{}]);

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

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

    setTasks([...tasks, newTask]);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div>
          {/* <h3>Project: {data.project.name}</h3> */}
          <div className="card bg-light rounded border-light shadow m-2">
            {!loading && !error && !taskLoading && !taskError && taskData && (
              <FrappeGantt
                tasks={tasks}
                // viewMode={this.state.mode}
                // onClick={(task) => console.log("log 1", task, "click")}
                // onDateChange={(task, start, end) =>
                //   console.log("log 2: ", task, start, end, "date")
                // }
                // onProgressChange={(task, progress) =>
                //   console.log("log 3: ", task, progress, "progress")
                // }
                // onTasksChange={(tasks) => console.log("log 4:", tasks, "tasks")}
              />
            )}
          </div>
          <div className="d-flex justify-content-end m-2">
            <AddTaskScheduleModal id={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Schedule;

import { useState, useRef } from "react";
import { FrappeGantt } from "frappe-gantt-react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import { sampleTasks } from "../sampleTasks";

const Schedule = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  const [tasks, setTasks] = useState<any>(sampleTasks || {});

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
          <h3>Project: {data.project.name}</h3>
          <form onSubmit={handleAddProjectTask}>
            <div>
              <label className="me-2">Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div>
              <label className="me-2">Start</label>
              <input
                type="date"
                value={taskStart}
                onChange={(e) => setTaskStart(e.target.value)}
              />
            </div>
            <div>
              <label className="me-2">End</label>
              <input
                type="date"
                value={taskEnd}
                onChange={(e) => setTaskEnd(e.target.value)}
              />
            </div>
            <div>
              <label className="me-2">Progress</label>
              <input
                type="text"
                value={taskProgress}
                onChange={(e) => setTaskProgress(e.target.value)}
              />
            </div>
            <div>
              <label className="me-2">Dependencies</label>
              <input
                type="text"
                value={taskDependencies}
                onChange={(e) => setTaskDependencies(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <FrappeGantt
            tasks={tasks}
            // viewMode={this.state.mode}
            onClick={(task) => console.log("log 1", task, "click")}
            onDateChange={(task, start, end) =>
              console.log("log 2: ", task, start, end, "date")
            }
            onProgressChange={(task, progress) =>
              console.log("log 3: ", task, progress, "progress")
            }
            onTasksChange={(tasks) => console.log("log 4:", tasks, "tasks")}
          />
        </div>
      )}
    </>
  );
};

export default Schedule;

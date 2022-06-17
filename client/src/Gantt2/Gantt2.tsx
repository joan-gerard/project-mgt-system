import * as React from "react";
import { FrappeGantt } from "frappe-gantt-react";

import "./styles.css";

const Gantt2 = () => {
  // let d1 = new Date();
  // let d2 = new Date();
  // d2.setDate(d2.getDate() + 5);
  // let d3 = new Date();
  // d3.setDate(d3.getDate() + 8);
  // let d4 = new Date();
  // d4.setDate(d4.getDate() + 20);

  const tasks: any = [
    {
      id: "Task 1",
      name: "Buy hosting",
      start: "2022-01-22",
      end: "2022-01-23",
      progress: 100,
    },
    {
      id: "Task 2",
      name: "Draw wireframes",
      start: "2022-01-23",
      end: "2022-01-25",
      progress: 100,
    },
    {
      id: "Task 3",
      name: "Visual Design",
      start: "2022-01-25",
      end: "2022-01-27",
      progress: 20,
      dependencies: "Task 2",
    },
    {
      id: "Task 4",
      name: "Build frontend",
      start: "2022-02-01",
      end: "2022-02-03",
      progress: 0,
      dependencies: "Task 3",
    },
    {
      id: "Task 5",
      name: "Build backend",
      start: "2022-02-03",
      end: "2022-02-07",
      progress: 0,
    },
    {
      id: "Task 6",
      name: "Deploy Website",
      start: "2022-02-08",
      end: "2022-02-09",
      progress: 0,
      dependencies: "Task 4, Task 5",
    },
  ];

  return (
    <div>
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
  );
};

export default Gantt2;

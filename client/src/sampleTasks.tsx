export const sampleTasks = [
  {
    id: "Buy hosting",
    name: "Buy hosting",
    start: "2022-01-22",
    end: "2022-01-23",
    progress: 100,
  },
  {
    id: "Draw wireframes",
    name: "Draw wireframes",
    start: "2022-01-23",
    end: "2022-01-25",
    progress: 100,
  },
  {
    id: "Visual Design",
    name: "Visual Design",
    start: "2022-01-25",
    end: "2022-01-27",
    progress: 20,
    dependencies: "Draw wireframes",
  },
  {
    id: "Build frontend",
    name: "Build frontend",
    start: "2022-02-01",
    end: "2022-02-03",
    progress: 0,
    dependencies: "Visual Design",
  },
  {
    id: "Build backend",
    name: "Build backend",
    start: "2022-02-03",
    end: "2022-02-07",
    progress: 0,
  },
  {
    id: "Deploy Website",
    name: "Deploy Website",
    start: "2022-02-08",
    end: "2022-02-10",
    progress: 0,
    dependencies: "Build frontend, Build backend",
  },
];

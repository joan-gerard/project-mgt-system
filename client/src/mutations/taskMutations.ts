import { gql } from "@apollo/client";

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      projectId
      taskId
      name
      start
      end
      progress
      dependencies
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask(
    $projectId: String!
    $taskId: String!
    $name: String!
    $start: String!
    $end: String!
    $progress: Number!
    $dependencies: String!
  ) {
    addTask(
      projectId: $projectId
      taskId: $taskId
      name: $name
      start: $start
      end: $end
      progresss: $progresss
      dependencies: $dependencies
    ) {
      id
      projectId
      taskId
      name
      start
      end
      progress
      dependencies
    }
  }
`;

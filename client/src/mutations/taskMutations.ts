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
    $name: String!
    $start: String!
    $end: String!
    $progress: Int!
    $dependencies: String!
  ) {
    addTask(
      projectId: $projectId
      name: $name
      start: $start
      end: $end
      progress: $progress
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

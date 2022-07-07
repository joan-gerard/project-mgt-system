import { gql } from "@apollo/client";

export const DELETE_TASK = gql`
  mutation deleteTask($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
      projectId
      id
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
      _id
      projectId
      id
      name
      start
      end
      progress
      dependencies
    }
  }
`;

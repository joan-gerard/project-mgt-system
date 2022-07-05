import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query getTasks {
    tasks {
      projectId
      id: taskId
      name
      start
      end
      progress
      dependencies
    }
  }
`;

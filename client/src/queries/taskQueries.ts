import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query getTasks {
    tasks {
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

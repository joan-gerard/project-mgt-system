import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query getTasks {
    tasks {
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

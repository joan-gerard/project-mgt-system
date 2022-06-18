import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      completionDate
      status
    }
  }
`;
export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      completionDate
      status
      client {
        id
        company
        name
        email
        phone
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      company
      name
      email
      phone
    }
  }
`;

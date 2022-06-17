import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addClient(
    $company: String!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    addClient(company: $company, name: $name, email: $email, phone: $phone) {
      id
      company
      name
      email
      phone
    }
  }
`;

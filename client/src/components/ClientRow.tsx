import React from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

const ClientRow: React.FC<ClientRowProps> = ({ client, idx }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{query: GET_CLIENTS}] // not recommended to avoid too many queries
    update(cache, { data: { deleteClient } }) {
      const { clients } =
        cache.readQuery<IClients | null>({ query: GET_CLIENTS }) || {};
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients?.filter(
            (client: IClient) => client.id !== deleteClient.id
          ),
        },
      });
    },
  });

  return (
    <>
      {client.id !== "62a9fd27426123031b883dac" && (
        <tr>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>{client.phone}</td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteClient()}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default ClientRow;

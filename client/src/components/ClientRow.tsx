import React from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");


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

  const handleDeleteClient = () => {
    deleteClient()
    socket.emit("delete_client", {
      data: { client }
    });

  }


  return (
    <>
      {client.id !== "62a9fd27426123031b883dac" && (
        <tr>
          <td>{client.company}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>{client.phone}</td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteClient()}
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

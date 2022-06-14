import React from "react";
import { FaTrash } from "react-icons/fa";

const ClientRow: React.FC<ClientRowProps> = ({ client, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;

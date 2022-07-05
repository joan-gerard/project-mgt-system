import React from "react";
import { FaEnvelope, FaPhone, FaIdBadge, FaBuilding } from "react-icons/fa";

const ClientInfo: React.FC<ClientInfoProps> = ({ client }) => {
  return (
    <>
      <h5 className="mt-2">Client Information</h5>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item">
          <FaBuilding className="icon" /> {client.company}
        </li>
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;

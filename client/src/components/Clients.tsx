import React, { useEffect } from "react";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const Clients = () => {
  const { loading, error, data, client } = useQuery(GET_CLIENTS);

  useEffect(() => {
    socket.on("receive_clients", (dataIO) => {
      console.log("refetching...");

      client.refetchQueries({
        include: [GET_CLIENTS],
      });
    });
  }, [socket]);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Company</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client: IClient, idx: number) => (
              <ClientRow key={idx} client={client} idx={idx} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;

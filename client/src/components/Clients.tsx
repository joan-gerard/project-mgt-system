import React from "react";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";


const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  console.log(data)

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>#</th>
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

import { useState } from "react";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import Spinner from "../components/Spinner";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { FaPencilAlt } from "react-icons/fa";
import EditProjectForm from "../components/EditProjectForm";
import AddClientToProject from "../components/AddClientToProject";

const Project = () => {
  const [needsUpdate, setNeedsUpdate] = useState(false);

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sn 2-25 d-inline ms-auto">
            Home
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status!</h5>
          <p className="lead">{data.project.status}</p>

          {data.project.client === null ||
          data.project.client.name === "No Client" ? (
            <>
              <AddClientToProject />
            </>
          ) : (
            <ClientInfo client={data.project.client} />
          )}
          {needsUpdate ? (
            <EditProjectForm project={data.project} setNeedsUpdate={setNeedsUpdate} />
          ) : (
            <button
              type="button"
              className="btn btn-secondary ms-auto mt-5"
              data-bs-toggle="modal"
              data-bs-target="#addClientModal"
              onClick={() => setNeedsUpdate(true)}
            >
              <div className="d-flex align-items-center">
                <FaPencilAlt className="icon" />
                <div>Edit Project</div>
              </div>
            </button>
          )}

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;

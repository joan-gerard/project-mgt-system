import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import Spinner from "../components/Spinner";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { FaUser } from "react-icons/fa";

const Project = () => {
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
            <button
              type="button"
              className="btn btn-secondary ms-auto"
              data-bs-toggle="modal"
              data-bs-target="#addClientModal"
            >
              <div className="d-flex align-items-center">
                <FaUser className="icon" />
                <div>Add Client</div>
              </div>
            </button>
          ) : (
            <ClientInfo client={data.project.client} />
          )}
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;

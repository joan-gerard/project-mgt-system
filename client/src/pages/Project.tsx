import { useEffect, useState } from "react";
import ClientInfo from "../components/ClientInfo";
import Spinner from "../components/Spinner";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { FaArrowLeft } from "react-icons/fa";
import EditProjectForm from "../components/EditProjectForm";
import WBS from "../components/WBS";
import ProjectActions from "../components/ProjectActions";

const Project = () => {
  const [status, setStatus] = useState(null);

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  useEffect(() => {
    if (data?.project?.status) {
      setStatus(data.project.status);
    }
  }, [data]);

  const [needsUpdate, setNeedsUpdate] = useState(false);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <Link to="/" className="btn 2-25 px-2 py-1 btn-white">
        <FaArrowLeft />
      </Link>

      {!loading && !error && (
        <div className="card p-5 mt-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <h1 className="me-2">{data.project.name}</h1>
              <div className="d-flex align-items-center">
                <p
                  className={`rounded p-1 m-0 ${
                    status === "Not Started" ? "bg-secondary text-white" : ""
                  } ${status === "In Progress" ? "bg-warning" : ""} ${
                    status === "Completed" ? "bg-success text-white" : ""
                  }`}
                >
                  {data.project.status}
                </p>
              </div>
            </div>
            <ProjectActions
              projectId={data.project.id}
              setNeedsUpdate={setNeedsUpdate}
            />
          </div>

          <p>{data.project.description}</p>

          {data.project.client === null ||
          data.project.client.name === "No Client" ? (
            <></>
          ) : (
            <ClientInfo client={data.project.client} />
          )}
          {/* Project Tasks */}
          <WBS id={id} loading={loading} error={error} />
          {/* Project Tasks */}
          {needsUpdate && (
            <EditProjectForm
              project={data.project}
              setNeedsUpdate={setNeedsUpdate}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Project;

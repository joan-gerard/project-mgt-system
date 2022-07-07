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
import ProjectMenu from "../components/ProjectMenu";
import Schedule from "./Schedule";

const Project = () => {
  const [status, setStatus] = useState(null);
  const [nav, setNav] = useState("info");

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
      <div className="d-flex align-items-center my-3">
        <Link to="/" className="btn 2-25 h-50 px-2 py-1 btn-white">
          <FaArrowLeft />
        </Link>
        <div className="d-flex ms-2 align-items-center">
          <h1 className="me-2 my-0">{data.project.name}</h1>
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
      </div>

      {!loading && !error && (
        <div className="card my-2">
          <div className="d-flex justify-content-between">
            <ProjectMenu setNav={setNav} />
            <ProjectActions
              projectId={data.project.id}
              setNeedsUpdate={setNeedsUpdate}
            />
          </div>

          {nav === "info" ? (
            <>
              <div className="d-flex mx-2 align-items-center justify-content-between"></div>

              <p className="mx-2">{data.project.description}</p>

              {data.project.client === null ||
              data.project.client.name === "No Client" ? (
                <></>
              ) : (
                <ClientInfo client={data.project.client} />
              )}
            </>
          ) : nav === "wbs" ? (
            <WBS id={id} loading={loading} error={error} />
          ) : nav === "schedule" ? (
            <Schedule />
          ) : (
            <EditProjectForm
              project={data.project}
              setNeedsUpdate={setNeedsUpdate}
            />
          )}

          {/* {needsUpdate && (
            <EditProjectForm
              project={data.project}
              setNeedsUpdate={setNeedsUpdate}
            />
          )} */}
        </div>
      )}
    </>
  );
};

export default Project;

import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectmutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const EditProjectForm: React.FC<EditProjectFormProps> = ({
  project,
  setNeedsUpdate,
}) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
  const [clientId, setClientId] = useState("");

  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log("EditProjectForm", data);
  console.log("EditProjectForm clientId", clientId);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status, clientId },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleEditProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return alert("Please, fill all fields");
    }
    updateProject();
    setNeedsUpdate(false);
  };

  if (loading) return null;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mt-5">
          <h3>Update Project Details</h3>
          <form onSubmit={handleEditProject}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                id="status"
                value={status}
                className="form-select"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="new">Not Started</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Client</label>

              <select
                id="clientID"
                value={clientId}
                className="form-select"
                onChange={(e) => setClientId(e.target.value)}
              >
                <option value="">Select Client</option>

                {data.clients.map((client: IClient) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button
              className="btn btn-white ms-2"
              onClick={() => setNeedsUpdate(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProjectForm;

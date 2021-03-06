import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ADD_PROJECT } from "../mutations/projectmutations";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [clientId, setClientId] = useState("noClient");
  const [status, setStatus] = useState("new");

  //GET clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, completionDate, status, clientId },
    // update(cache, { data: { addProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS }) || {};
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: { projects: [...(projects || []), addProject] },
    //   });
    // },
    refetchQueries: [{ query: GET_PROJECTS }], // not recommended to avoid too many queries
  });

  const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return alert("Please, fill all fields");
    }
    socket.emit("send_projects", {
      data: { name, description, completionDate, status, clientId },
    });

    addProject();
    setName("");
    setDescription("");
    setCompletionDate("");
    setStatus("new");
    setClientId("");
  };
  if (loading) return null;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary btn-effect project-icon"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            <div className="d-flex align-items-center">
              <div>New Project</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addProjectModal"
            aria-labelledby="addProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addProjectModalLabel">
                    New Project
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddProject}>
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
                      <label className="form-label">Completion Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="completionDate"
                        value={completionDate}
                        onChange={(e) => setCompletionDate(e.target.value)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        value={status}
                        className="form-select"
                        onChange={(e) => setStatus(e.target.value)}
                      >
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
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-secondary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProjectModal;

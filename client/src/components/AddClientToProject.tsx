import React from 'react'
import { FaUser, FaPencilAlt } from "react-icons/fa";


const AddClientToProject = () => {
  return (
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

  )
}

export default AddClientToProject
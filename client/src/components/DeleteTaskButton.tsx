import { useMutation } from "@apollo/client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DELETE_TASK } from "../mutations/taskMutations";
import { GET_TASKS } from "../queries/taskQueries";

const DeleteTaskButton: React.FC<DeleteTaskButtonProps> = ({ id }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: { id },
    update(cache, { data: { deleteTask } }) {
      const { tasks } = cache.readQuery({ query: GET_TASKS }) || {};
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: tasks?.filter((task: ITask) => task.id !== deleteTask.id),
        },
      });
    },
  });

  const handleDeleteTask = () => {
    deleteTask();
  };
  
  return (
    <button className="btn btn-danger btn-sm" onClick={handleDeleteTask}>
      <FaTrashAlt />
    </button>
  );
};

export default DeleteTaskButton;

import mongoose, { model, Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
  projectId: {
    type: String,
  },
  taskId: {
    type: String,
  },
  name: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  progress: {
    type: Number,
  },
  dependencies: {
    type: String,
  },
});

export default model("Task", TaskSchema);

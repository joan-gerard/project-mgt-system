import mongoose, { model, Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
  projectId: {
    type: String,
  },
  taskId: {
    type: String,
  },
  taskName: {
    type: String,
  },
  taskStart: {
    type: String,
  },
  taskEnd: {
    type: String,
  },
  taskProgress: {
    type: Number,
  },
  taskDependency: {
    type: String,
  },
});

export default model("Task", TaskSchema);

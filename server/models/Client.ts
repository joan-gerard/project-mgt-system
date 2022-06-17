import mongoose, { model, Schema } from "mongoose";

const ClientSchema = new mongoose.Schema({
  company: {
    type: String
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export default model("Client", ClientSchema);

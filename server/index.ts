import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
require("dotenv").config();
const port: string | number = process.env.PORT || 5000;
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import { connectDB } from "./config/db";

const app = express();

// connect tp DB
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on("send_projects", (data) => {
    io.emit("receive_projects", data);
  });
  socket.on("delete_project", (data) => {
    io.emit("receive_projects", data);
    console.log("delete_projects: ", data);
  });

  socket.on("send_clients", (data) => {
    io.emit("receive_clients", data);
  });

  socket.on("delete_client", (data) => {
    io.emit("receive_clients", data);
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));

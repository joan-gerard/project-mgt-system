import React from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <AddProjectModal />
      <Projects />
      <hr />
      <AddClientModal />
      <Clients />
    </div>
  );
};

export default Home;

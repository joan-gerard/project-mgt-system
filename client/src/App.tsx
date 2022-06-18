import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Project from "./pages/Project";
import Gantt2 from "./Gantt2/Gantt2";
import CurrentDate from "./components/CurrentDate";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <nav className="navbar navbar-expand-lg bg-light ps-4 pe-4 mb-4 align-items-center">
            <Header />
            <CurrentDate />
          </nav>
          <div className="container-fluid ps-5 pe-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/gantt" element={<Gantt2 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;

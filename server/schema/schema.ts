import { projects, clients } from "../sampleData";
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// Root queries
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
    project: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return projects.find((project) => project.id === args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});

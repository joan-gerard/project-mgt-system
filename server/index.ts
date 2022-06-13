import express from "express";
const port: string | number = process.env.PORT || 5000;
import { graphqlHTTP } from "express-graphql";
import schema from './schema/schema';
require("dotenv").config();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server listening on port ${port}`));

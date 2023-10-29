import { orders } from "./../models/orders";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const typesArray = loadFilesSync("../**/**/*.graphql");
const resolversArray = loadFilesSync("../**/**/*.resolvers.ts");

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});

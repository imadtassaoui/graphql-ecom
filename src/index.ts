import { orders } from "./../models/orders";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const typesArray = loadFilesSync("../**/**/*.graphql");
const resolversArray = loadFilesSync("../**/**/*.resolvers.ts");

const startApolloServer = async () => {
  const app = express();
  app.use(
    cors({
      credentials: true,
    })
  );

  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.json());

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(8080, () => {
    console.log("Server running on http://localhost:8080/");
  });
};

startApolloServer();

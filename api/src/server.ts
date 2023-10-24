import { MongoClient } from "mongodb";
import { Request, Response, NextFunction } from "express";

const body = require("body-parser");

import express, { Application } from "express";
import { Server } from "http";
import cors from "cors";

const app: any = express();
app.use(cors());

async function connect() {
  const mongo = await MongoClient.connect(
    "mongodb://admin:admin@mongo:27017/admin"
  );
  app.db = mongo.db();

  await mongo.connect();
}

connect();

app.use(
  body.json({
    limit: "500kb",
  })
);

app.use("/", require("./routes/post"));

const server: Server = app.listen(3001, () =>
  console.log("server is listen on the port 3001")
);

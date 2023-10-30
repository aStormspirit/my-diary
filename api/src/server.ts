import { MongoClient } from "mongodb";
import { Request, Response, NextFunction } from "express";

const body = require("body-parser");

import express, { Application } from "express";
import { Server } from "http";
import cors from "cors";

const app: any = express();
app.use(cors());

async function connect() {
  try {
    const mongo = await MongoClient.connect(process.env.DATABASE_URL || "");
    app.db = mongo.db();
    await mongo.connect();
  } catch (err) {
    console.log(err);
  }
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

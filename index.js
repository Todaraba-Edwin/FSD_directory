import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as Const from "./constrant/index.js";

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3001'
  }));

app.get("/healthckeck", (req, res) => {
  console.log("[GET ROUTE]");
  res.send({
    message: "SUCCESS",
    data: Const.users,
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

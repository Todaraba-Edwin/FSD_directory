import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as Get from "./controllers/get/index.js";
import * as Post from "./controllers/post/index.js";

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// API_GET
app.get("/api/healthckeck", Get.handle_HeathCheck);

// API_POST
app.post("/api/login", Post.handle_Login);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

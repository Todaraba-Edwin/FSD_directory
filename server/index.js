import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as Const from "./constrant/index.js";

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/api/healthckeck", (req, res) => {
  console.log("[GET : /healthckeck]");
  res.send({
    message: "SUCCESS",
    data: Const.users,
  });
});

app.post("/api/login", (req, res) => {
  console.log("login_info", req.body);
  const { email: reqEmail } = req.body;
  const findUser = Const.users.find(({ email }) => reqEmail === email);
  if (findUser) {
    res.status(200).send({
      message: "SUCCESS",
      data: {
        message: "로그인을 성공했습니다",
        userInfo: reqEmail,
      },
    });
  } else {
    res.status(404).send({
      message: "사용자를 찾을 수 없습니다.",
      statuas: 401,
    });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

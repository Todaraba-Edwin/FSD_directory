import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import * as Const from "./constrant/index.js";

const app = express();
const PORT = 3003;

dotenv.config();
const secretKey = process.env.SECRET_KEY;

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
  if (!Const.jwtConfig) return;
  const { expiresInAccess, expiresInRefresh } = Const.jwtConfig;
  if (findUser) {
    const accessToken = Const.handle_jwt({
      secretKey,
      findUser,
      expiresIn: expiresInAccess,
    });
    const refreshToken = Const.handle_jwt({
      secretKey,
      findUser,
      expiresIn: expiresInRefresh,
    });

    res
      .header("Access-Token", `Bearer ${accessToken}`)
      .header("Refresh-Token", `Bearer ${refreshToken}`)
      .status(200)
      .send({
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

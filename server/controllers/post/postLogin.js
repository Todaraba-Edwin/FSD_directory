import * as Const from "../../constrant/index.js";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const handle_Login = (req, res) => {
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
};

import jwt from "jsonwebtoken";

export const jwtConfig = {
  expiresInAccess: 60 * 10,
  expiresInRefresh: 60 * 60 * 24,
};

export const handle_jwt = ({ secretKey, findUser, expiresIn }) => {
  return jwt.sign(findUser, secretKey, {
    expiresIn,
  });
};

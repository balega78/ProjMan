const jwt = require("jsonwebtoken");

export const verifyAccesToken = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send("No authentication token found");
  const authHeader = req.headers.authorization
  let token = null;
  try {
    token = jwt.verify(authHeader.split(' ')[1], process.env.PRIVATE_KEY_VALUE);
  } catch (e) {
    return res.status(401).send("Problem with authentication token")
  }
  req.authToken = token;
  next();
}
import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization") || req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // contient normalement l'id, l'email, etc.
    next();
  } catch (error) {
    console.error("Invalid token:", error.message);
    return res.status(403).json({ error: "Invalid token." });
  }
};

export default authmiddleware;

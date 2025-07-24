import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

// Register User
export const registerUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const [rows] = await pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
  
  const insertedId = rows.insertId;

  const [userResult] = await pool.query("SELECT * FROM users WHERE id = ?", [insertedId]);
  return userResult[0];
};

// Login User
export const loginUser = async (email, password) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  const user = rows[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });

  return { user, accessToken };
};

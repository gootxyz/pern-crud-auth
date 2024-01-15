import { pool } from "../db.js";
import bcrypt from 'bcrypt';
import { createAccessToken } from "../libs/jwt.js";


export const signin = (req, res) => {
  res.send("Signing in...");
};

// signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // hashing a password
    const hashPassword = await bcrypt.hash(password, 10);
    //inserting a user
    const result = await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, hashPassword]
    );
    // creating a token for the user
    const token = await createAccessToken({id: result.rows[0].id})

    return res.json({
      token: token
    });

  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({message: "User is already registered"});
    }
  }
};

export const signout = (req, res) => {
  res.send("signing out...");
};

export const profile = (req, res) => {
  res.send("profile of user...");
};

import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

// signin
export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({ message: "Email not regitered" });
  }

  //password is equal to result password
  const validPassword = await bcrypt.compare(password, result.rows[0].password);
  if (!validPassword) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = await createAccessToken({ id: result.rows[0].id });
  // assigning the token to a cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.json(result.rows[0]);
};

// signup
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // hashing a password
    const hashPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
    //inserting a user
    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashPassword, gravatar]
    );
    // creating a token for the user based on id, you can add more data to it
    const token = await createAccessToken({ id: result.rows[0].id });

    // assigning the token to a cookie
    res.cookie("token", token, {
      //httpOnly: true,
      // to be visible in the console
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "User is already registered" });
    }
    next(error);
  }
};

// signout
export const signout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
};

// profile
export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    req.userId,
  ]);
  return res.json(result.rows[0]);
};

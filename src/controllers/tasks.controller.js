import { pool } from "../db.js";

export const getAllTasks = (req, res) => {
  res.send("Getting tasks...");
};

export const getTask = (req, res) => {
  res.send("Getting single task...");
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.send("Oops, that task is already there");
    }
    next(error);
  }
};

export const updateTask = (req, res) => {
  res.send("Updating a task...");
};

export const deleteTask = (req, res) => {
  res.send("Deleting a task...");
};

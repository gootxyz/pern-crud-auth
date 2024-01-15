import { pool } from "../db.js";

// getting all tasks
export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  return res.json(result.rows);
};

// getting a single task
export const getTask = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return res.status(404).json({ message: "Not a task with that id" });
  }
  return res.json(result.rows[0]);
};

// creting a task
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
      return res
        .status(409)
        .json({ message: "Oops, that task is already there." });
    }
    next(error);
  }
};

// updating a task
export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json(result.rows[0]);
};

// deleting a task
export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
  console.log(result);
  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Task not found" });
  }
  return res.sendStatus(204);
};

import { Router } from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", deleteTask);

router.delete("/tasks/:id", updateTask);

export default router;

import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => {
  res.send("Getting tasks...");
});

router.get("/tasks/:id", (req, res) => {
  res.send("Getting single task...");
});

router.post("/tasks", (req, res) => {
  res.send("Creating a task...");
});

router.put("/tasks/:id", (req, res) => {
  res.send("Updating a task...");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("Deleting a task...");
});

export default router;

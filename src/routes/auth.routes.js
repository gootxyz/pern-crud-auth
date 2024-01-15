import { Router } from "express";

const router = Router();

router.post("/signin", (req, res) => {
  res.send("Signing in...");
});

router.post("/signup", (req, res) => {
  res.send("registering...");
});

router.post("/signout", (req, res) => {
  res.send("signing out...");
});

router.get("/profile", (req, res) => {
  res.send("profile of user...");
});

export default router;

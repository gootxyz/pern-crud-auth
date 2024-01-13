import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
//to use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));

//final route for handling errors
app.use((err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
});
export default app;

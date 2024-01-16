import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser'

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
// to read cookies from req.headers
app.use(cookieParser());
//to use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));
//adding auth routes
app.use('/api', authRoutes);
//adding task routes
app.use('/api', tasksRoutes);

//ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
});
export default app;
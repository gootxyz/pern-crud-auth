import { config } from "dotenv";
config();

export const DB_PORT = process.env.DB_PORT || 5432
export const HOST = process.env.DB_HOST || 'localhost'
export const USER = process.env.DB_USER || 'postgres'
export const PASSWORD = process.env.DB_PASSWORD
export const DATABASE = process.env.DATABASE || 'tasks'

export const PORT = process.env.PORT || 3000

export const ORIGIN = process.env.ORIGIN || "http://localhost:5173"
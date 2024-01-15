import { config } from "dotenv";
config();

export const DB_PORT = process.env.DB_PORT || 5432
export const USER = process.env.DB_USER || 'postgres'
export const PASSWORD = process.env.DB_PASSWORD
export const HOST = process.env.DB_HOST || 'localhost'
export const PORT = process.env.PORT || 3000
export const DATABASE = process.env.DATABASE || 'tasks'
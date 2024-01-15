// connecting to postgres
import pg from "pg";

import {
  DB_PORT,
  USER,
  PASSWORD,
  HOST,
  DATABASE
} from './config.js';

export const pool = new pg.Pool({
  port: DB_PORT,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE
});

pool.on("connect", () => {
  console.log("Connected to database!");
});

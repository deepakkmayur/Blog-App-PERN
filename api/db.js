// import { Pool } from "pg"
import pkg from 'pg';
const { Pool } = pkg;
import { USER, HOST, DATABASE, PASSWORD, PORT } from "./env.js";

const pool = new Pool({
  user:USER,  
  host:HOST,
  database:DATABASE,   
  password:PASSWORD,
  port:PORT,
});

export default pool;


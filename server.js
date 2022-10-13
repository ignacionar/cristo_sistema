import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config()

connectDB()

const PORT = process.env.PORT || 6000

const server = express();

server.use(cors());
server.use(express.json());

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, '/client/build')));
    
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client', 'build', 'index.html'));
  })
} else {
  server.get('/', (req, res) => {
    res.send('Api running');
  })    
}

server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Helper scripts
import checkEnvVariable from './helper/envVariable';

checkEnvVariable();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
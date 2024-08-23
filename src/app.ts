import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

// Helper scripts
import checkEnvVariable from './helper/envVariable';

checkEnvVariable();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
import AuthRoutes from './routes/auth.routes';

app.use(AuthRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
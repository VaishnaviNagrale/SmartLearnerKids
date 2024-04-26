import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import connectDb from './db/db.js';
import userRoute from './routes/user.routes.js';

// Config dot env file
config();
connectDb();

// Create express app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

app.use(cors({
  origin: '*',
}));

// Routes
// User routes
app.use('/api/v1/users', userRoute);

// Define the port
const port = process.env.PORT || 3000; // Use port 8082 if PORT environment variable is not set

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

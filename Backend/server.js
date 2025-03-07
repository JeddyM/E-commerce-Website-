import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './Routes/UserRoutes.js';
import cookieParser from 'cookie-parser';
import {notFound, errorHandler } from './Middlewares/errorMiddleware.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';


dotenv.config();  //reads the .env file and populates the process.env object
const port= process.env.PORT || 8000

process.on("SIGTERM", () => {
    console.log("SIGTERM signal received. Closing server...");
    server.close(() => {
      console.log("Server closed.");
    });
  });
  
  process.on("SIGINT", () => {
    console.log("SIGINT signal received. Closing server...");
    server.close(() => {
      console.log("Server closed.");
    });
  });

connectDB();

const app = express();


//parses incoming request with json data and form data or URL-encoded data.
//Allows parsing of nested objects using the qs(query string) library.
app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:5000' }));
app.use(express.urlencoded({extended:true})) 


app.use(cookieParser());

app.use('/api/users', userRoutes)

app.listen(port, ()=> console.log('The server started on port ' ,port))

app.use(notFound);
app.use(errorHandler)

app.get('/', (req, res) => res.send('server is ready'))
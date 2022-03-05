import express from  'express';
import postRoutes from  './routes/posts.js';
import userRouter from "./routes/user.js";
import  mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from  'body-parser';
import cors from  'cors';
const  app = express();
app.use(bodyParser.json({  limit:  "30mb", extended: true }));
app.use(bodyParser.urlencoded({  limit:  "30mb", extended: true }));
app.use(cors());
app.use('/posts',postRoutes);
app.use("/user", userRouter);
dotenv.config({path:  'config/.env'});
const  PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URI;
mongoose.connect(url, {useNewUrlParser:  true,  useUnifiedTopology:  true  })
.then(()  =>  app.listen(PORT, () =>  console.log(`Server running on port:  ${PORT}`)))
.catch((error) => console.log(error.message));









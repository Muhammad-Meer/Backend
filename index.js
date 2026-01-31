import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose'




dotenv.config();
const app = express()


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



app.get('/', (req,res) => {
  res.end("some deta")
})


const port = 3200
app.listen(port, () => {
  console.log("http://localhost:"+port)
})
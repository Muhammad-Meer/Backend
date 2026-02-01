import mongoose from "mongoose";

const studentscheema = new mongoose.Schema({
  naem: String,
  age: Number,
  email: String
})

export default studentscheema
 
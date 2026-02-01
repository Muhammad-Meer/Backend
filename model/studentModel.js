import mongoose from "mongoose";
import studentscheema from "../scheema/studentscheema.js";

const scheemamodel = mongoose.model('student', studentscheema)
export default scheemamodel

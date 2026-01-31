// import express from 'express'
// import dotenv from "dotenv";
// import mongoose from 'mongoose'



// dotenv.config();
// const app = express()

// app.use(express.json()) //

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));



// app.get('/', (req,res) => {
//   res.end("message")
// })


// app.post('/add', (req,res) => {
// res.json({ message: "success"})
// })


// const port = 3200
// app.listen(port, () => {
//   console.log("http://localhost:"+port)
// })

import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose'
import path from 'path'

dotenv.config();
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // 👈 form data ke liye

// EJS setup
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// schema
const studentSchema = new mongoose.Schema({
  name: String,
  fatherName: String
})

const Student = mongoose.model('Student', studentSchema)

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/add', async (req, res) => {
  const { name, fatherName } = req.body

  await Student.create({
    name,
    fatherName
  })

  res.send("Data MongoDB mein save ho gaya ✅")
})

const port = 3200
app.listen(port, () => {
  console.log("http://localhost:" + port)
})

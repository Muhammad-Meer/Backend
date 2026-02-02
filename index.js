// import express from 'express'
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import path from 'path'

// dotenv.config()
// const app = express()

// // middlewares
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // ejs
// app.set('view engine', 'ejs')
// app.set('views', path.join(process.cwd(), 'views'))

// // mongo connect
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err))

// // schema + model
// const studentSchema = new mongoose.Schema({
//   name: String,
//   fatherName: String
// })

// const Student = mongoose.model('Student', studentSchema)

// // home (form)
// app.get('/', (req, res) => {
//   res.render('index')
// })

// // add data (POST)
// app.post('/add', async (req, res) => {
//   const { name, fatherName } = req.body
//   await Student.create({ name, fatherName })
//   res.redirect('/students')
// })

// // get all data
// app.get('/students', async (req, res) => {
//   const students = await Student.find()
//   res.render('students', { students })
// })

// // delete data
// app.post('/delete/:id', async (req, res) => {
//   await Student.findByIdAndDelete(req.params.id)
//   res.redirect('/students')
// })

// app.listen(3200, () => {
//   console.log('http://localhost:3200')
// })


// complete code commit

// import express from 'express'
// import mongoose from 'mongoose'
// import studentModel from './model/studentModel.js'

// const app = express();
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(
//   "mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/mydatabase" // database name add kar diya
// ).then(() => {
//   console.log("connect ho gya")
// }).catch(err => {
//   console.log("MongoDB connection error:", err)
// })

// // GET route
// app.get('/', async (req, res) => {
//   try {
//     const students = await studentModel.find()
//     console.log(students)
//     res.send(students) // res.end("p") ki jagah sahi response bheja
//   } catch (err) {
//     res.status(500).send({ error: "Database error" })
//   }
// })


// app.post('/save', async (req,res) => {
    
//     const studentmody = await studentModel.create(req.body)
//     {
//       data: studentmody
//     }
// })




// app.listen(3200, () => {
//   console.log('http://localhost:3200')
// })

import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()


const url = "mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/?appName=Cluster0"
const database = "test"
const  collection = "students"
const client = new MongoClient(url)
client.connect().then(() => {
  console.log("conect")
}).catch(() => {
  console.log("erorr")
})


app.get('/', (req,res) => {
  res.send(`
    <form action="/uplod" method="post">
    <input type="file" name="myfile"/>
    <input type="file" name="myfile"/>
    <button>file</button>
    </form>
    `)
})

app.get('/uplod', (req,res) => {
  res.send({
    mesaage: "file uplod",
    info: null
  })
})

const port = 3200
app.listen(port, () => {
  console.log("http://localhost:3200")
})

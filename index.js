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
import mongoose from 'mongoose'
//  const app = express()


 async function dbfunction() {
  await mongoose.connect("mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/")
  const schema = new mongoose.schema({
    name: String,
    age: Number
  })

 }

 dbfunction()








 app.get('/', (req, res) => {
   res.end("papan")
 })

  app.listen(3200, () => {
   console.log('http://localhost:3200')
 })

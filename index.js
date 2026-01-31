import express from 'express'
import { MongoClient } from 'mongodb'
const app = express()

const dbneam = 'school'
const url = 'mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/'
const client = new MongoClient(url)
app.set("view engine", 'ejs')



app.get('/', async (req, res) => {

  async function dnFunction() {
    await client.connect()
    const db = client.db(dbneam)
    const collectionneam = db.collection('student')

    await collectionneam.insertOne({
      name: "Muhammad Ali"
    })

    const result = await collectionneam.find().toArray()
    return result   // 👈 yahin se return
  }

  const result = await dnFunction() // 👈 yahan receive

  res.render('students', { result })
})


app.listen(3200, () => {
  console.log("http://localhost:3200")
})          

